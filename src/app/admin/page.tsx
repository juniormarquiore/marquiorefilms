'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { FiEdit, FiImage, FiFileText, FiSettings, FiUsers, FiLayout } from 'react-icons/fi';

// Componentes e tipos para as diferentes funcionalidades
interface TextContent {
  id: string;
  title: string;
  content: string;
  location: string;
}

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  fontHeading: string;
  fontBody: string;
}

interface ImageItem {
  id: number;
  name: string;
  path: string;
}

const AdminPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar autenticação quando o componente é montado
  useEffect(() => {
    const checkAuth = () => {
      try {
        const auth = sessionStorage.getItem('isAuthenticated');
        if (auth !== 'true') {
          window.location.href = '/auth/login';
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('Erro ao verificar autenticação:', err);
        window.location.href = '/auth/login';
      } finally {
        setIsLoading(false);
      }
    };
    
    // Adicionar um pequeno atraso para garantir que a verificação
    // só ocorre após o carregamento completo do navegador
    setTimeout(checkAuth, 500);
  }, []);

  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState<'dashboard' | 'images' | 'texts' | 'theme'>('dashboard');

  // Estado para os projetos (simulado)
  const [projects] = useState([
    {
      id: 1,
      title: 'Casamento Maria e João',
      date: '15/04/2023',
      progress: 65,
      status: 'Em andamento',
      deadline: '30/06/2023'
    },
    {
      id: 2,
      title: 'Casamento Ana e Pedro',
      date: '22/05/2023',
      progress: 90,
      status: 'Aguardando aprovação',
      deadline: '15/07/2023'
    },
    {
      id: 3,
      title: 'Casamento Luciana e Rafael',
      date: '10/03/2023',
      progress: 100,
      status: 'Concluído',
      deadline: '05/05/2023'
    }
  ]);
  
  // Estado para as imagens
  const [siteImages] = useState<ImageItem[]>([
    { id: 1, name: 'Banner Principal', path: '/images/banner.jpg' },
    { id: 2, name: 'Fundo Sobre', path: '/images/about-bg.jpg' },
    { id: 3, name: 'Portfolio 1', path: '/images/portfolio-1.jpg' },
    { id: 4, name: 'Portfolio 2', path: '/images/portfolio-2.jpg' },
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Estado para os textos
  const [textContents, setTextContents] = useState<TextContent[]>([
    {
      id: 'hero',
      title: 'Título Principal',
      content: 'Transformando momentos em arte cinematográfica',
      location: 'Home / Hero'
    },
    {
      id: 'about',
      title: 'Sobre Nós',
      content: 'A Marquiore Films é uma empresa especializada em filmagem de casamentos, com 8 anos de experiência transformando momentos especiais em arte cinematográfica.',
      location: 'Home / Sobre'
    },
    {
      id: 'services',
      title: 'Nossos Serviços',
      content: 'Oferecemos pacotes personalizados para capturar cada momento especial do seu casamento.',
      location: 'Home / Serviços'
    },
  ]);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);

  // Estado para o tema
  const [theme, setTheme] = useState<ThemeConfig>({
    primaryColor: '#a67c52',
    secondaryColor: '#0f1013',
    accentColor: '#d4af7a',
    textColor: '#ffffff',
    backgroundColor: '#0f1013',
    fontHeading: 'Playfair Display',
    fontBody: 'Inter',
  });

  // Funções para manipulação dos estados
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleImageSave = () => {
    alert('Imagem salva com sucesso!');
    setPreviewImage(null);
  };

  const handleTextChange = (id: string, field: keyof TextContent, value: string) => {
    setTextContents(prevContents => 
      prevContents.map(content => 
        content.id === id ? { ...content, [field]: value } : content
      )
    );
  };

  const handleTextSave = () => {
    alert('Texto salvo com sucesso!');
  };

  const handleThemeChange = (field: keyof ThemeConfig, value: string) => {
    setTheme(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleThemeSave = () => {
    alert('Configurações de tema salvas com sucesso!');
  };

  const selectedText = selectedTextId 
    ? textContents.find(text => text.id === selectedTextId) 
    : null;

  // Função para fazer logout
  const handleLogout = () => {
    try {
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('user');
      window.location.href = '/auth/login';
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    }
  };

  // Se estiver carregando ou não estiver autenticado, mostra o estado de carregamento
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-xl font-semibold text-gray-700 mb-4">Verificando autenticação...</div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <p className="text-center text-gray-500">Se você não for redirecionado em alguns segundos, 
            <button 
              onClick={() => window.location.href = '/auth/login'}
              className="text-blue-500 hover:text-blue-700 ml-1"
            >
              clique aqui para fazer login
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#23282d] text-gray-100 min-h-screen">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-semibold">Painel Marquiore</h1>
        </div>
        <nav className="mt-4">
          <div className="px-4 py-2 text-sm text-gray-400 uppercase">Principal</div>
          <Link href="/admin" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
            <FiLayout className="mr-2" /> Painel
          </Link>
          <Link href="/admin/posts" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
            <FiFileText className="mr-2" /> Posts
          </Link>
          <Link href="/admin/media" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
            <FiImage className="mr-2" /> Mídia
          </Link>
          <div className="px-4 py-2 mt-4 text-sm text-gray-400 uppercase">Configurações</div>
          <Link href="/admin/appearance" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
            <FiEdit className="mr-2" /> Aparência
          </Link>
          <Link href="/admin/users" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
            <FiUsers className="mr-2" /> Usuários
          </Link>
          <Link href="/admin/settings" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
            <FiSettings className="mr-2" /> Configurações
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao Painel!</h2>
          <p className="text-gray-600">Nós reunimos alguns links para você começar:</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Comece a usar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admin/appearance" className="text-blue-600 hover:underline">
                  Personalize seu Site
                </Link>
              </li>
              <li>
                <Link href="/admin/posts/new" className="text-blue-600 hover:underline">
                  Escreva seu primeiro post
                </Link>
              </li>
              <li>
                <Link href="/admin/pages/new" className="text-blue-600 hover:underline">
                  Adicione uma página Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Próximos passos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admin/media" className="text-blue-600 hover:underline">
                  Gerencie suas mídias
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className="text-blue-600 hover:underline">
                  Configure seu site
                </Link>
              </li>
              <li>
                <Link href="/admin/users" className="text-blue-600 hover:underline">
                  Gerencie usuários
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Mais ações</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admin/appearance/widgets" className="text-blue-600 hover:underline">
                  Gerencie widgets
                </Link>
              </li>
              <li>
                <Link href="/admin/appearance/menus" className="text-blue-600 hover:underline">
                  Configure menus
                </Link>
              </li>
              <li>
                <Link href="/admin/help" className="text-blue-600 hover:underline">
                  Aprenda mais sobre como começar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Atividade</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Últimos posts</span>
              <span className="text-sm text-gray-500">14 Posts</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Páginas</span>
              <span className="text-sm text-gray-500">12 Páginas</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Comentários</span>
              <span className="text-sm text-gray-500">0 Comentários</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage; 