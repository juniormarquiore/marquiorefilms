import { redirect } from 'next/navigation';

type UserType = 'client' | 'admin';

export default function Dashboard() {
  // Em uma implementação real, você verificaria a sessão do usuário
  // e redirecionaria com base no tipo (cliente ou admin)
  const getUserType = (): UserType => {
    // Aqui viria a lógica real para obter o tipo do usuário a partir da sessão
    return 'client';
  };
  
  const userType = getUserType();
  
  // Redirecionar com base no tipo de usuário
  if (userType === 'admin') {
    redirect('/dashboard/admin');
  } else {
    redirect('/dashboard/client');
  }
  
  // Este retorno nunca será executado devido ao redirecionamento
  return null;
} 