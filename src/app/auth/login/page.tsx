'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Verificar se já está autenticado ao carregar a página
  useEffect(() => {
    try {
      const auth = sessionStorage.getItem('isAuthenticated');
      if (auth === 'true') {
        router.push('/admin');
      }
    } catch (err) {
      console.error('Erro ao verificar autenticação:', err);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Verificação simples das credenciais
    if (email === 'admin@marquiore.com' && password === 'marquire96@') {
      try {
        // Armazenar o estado de autenticação em sessionStorage (mais seguro que localStorage para esta finalidade)
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('user', JSON.stringify({ 
          email, 
          name: 'Administrador',
          role: 'admin'
        }));
        
        // Adicionar um pequeno atraso para garantir que os dados sejam salvos
        setTimeout(() => {
          // Redirecionar para o painel administrativo
          window.location.href = '/admin';
        }, 100);
      } catch (err) {
        console.error('Erro ao salvar autenticação:', err);
        setError('Erro ao fazer login. Tente novamente.');
      }
    } else {
      setError('Email ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Entre na sua conta
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Acesse o painel administrativo da Marquiore Films
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <div className="text-sm text-gray-500 text-center">
            <p>Email: admin@marquiore.com</p>
            <p>Senha: marquire96@</p>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 