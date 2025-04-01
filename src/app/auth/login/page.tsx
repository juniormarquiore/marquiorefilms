'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Em um ambiente real, substituiríamos isso por uma chamada de API real
      // Esta é uma simulação para fins de demonstração
      if (data.email === 'admin@marquiore.com' && data.password === 'admin123') {
        // Admin login
        router.push('/dashboard/admin');
      } else if (data.email === 'cliente@exemplo.com' && data.password === 'cliente123') {
        // Cliente login
        router.push('/dashboard/client');
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (err) {
      setError('Ocorreu um erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary relative">
      {/* Background decorativo inspirado em arte renascentista */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/renaissance-pattern-background-luxury-royal-ornament-design_572038-338.jpg')" }}>
      </div>
      
      {/* Elemento sutil da Criação de Adão */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 opacity-20 bg-contain bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/024/043/840/non_2x/the-creation-of-adam-michelangelo-hand-illustration-ai-generated-free-png.png')" }}>
      </div>
      
      <div className="max-w-md w-full p-8 bg-gray-900 rounded-lg shadow-lg relative z-10 border border-primary/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary font-serif">Marquiore Filmes</h1>
          <p className="text-gray-300 mt-2">Área exclusiva para clientes</p>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-100 px-4 py-2 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="seu@email.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="******"
              {...register('password')}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-primary focus:ring-primary"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Lembrar-me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-primary hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-primary text-secondary font-bold rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 relative overflow-hidden group"
            >
              <span className="relative z-10">{isLoading ? 'Entrando...' : 'Entrar'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Não tem uma conta?{' '}
            <Link href="/auth/register" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </p>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-300 mt-4 inline-block">
            ← Voltar para a página inicial
          </Link>
        </div>
        
        {/* Decoração sutil na parte inferior */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 opacity-20 bg-contain bg-no-repeat"
          style={{ backgroundImage: "url('https://www.pngall.com/wp-content/uploads/5/Greek-Pillar-PNG-Image.png')" }}>
        </div>
      </div>
    </div>
  );
} 