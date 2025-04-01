'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function RedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const token = searchParams.get('token');
        const user = searchParams.get('user');

        if (!token || !user) {
          setError('Dados de autenticação inválidos');
          setIsLoading(false);
          return;
        }

        // Tentar fazer login com os dados recebidos
        await login(token, JSON.parse(user));

        // Redirecionar para o dashboard após login bem-sucedido
        router.push('/dashboard');
      } catch (err) {
        console.error('Erro durante o redirecionamento:', err);
        setError('Erro ao processar autenticação');
        setIsLoading(false);
      }
    };

    handleRedirect();
  }, [searchParams, router, login]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isLoading ? 'Redirecionando...' : 'Erro de Autenticação'}
          </h2>
          {isLoading ? (
            <div className="mt-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Por favor, aguarde enquanto processamos sua autenticação...</p>
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => router.push('/auth/login')}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Voltar para Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 