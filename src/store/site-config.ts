import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { prisma } from '@/lib/prisma';

export type FooterLink = {
  text: string;
  url: string;
};

export type SiteTheme = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
};

export type SiteConfig = {
  id?: number;
  name: string;
  logoUrl: string | null;
  faviconUrl: string | null;
  theme: SiteTheme;
  footerText: string | null;
  termsOfService: string | null;
  privacyPolicy: string | null;
  footerLinks: FooterLink[] | null;
  googleAnalyticsId: string | null;
  metaPixelId: string | null;
  otherAnalyticsScripts: string | null;
};

// Dentro do tipo SiteConfigState ou logo após as outras definições de tipos
// Adicionando o tipo para o conteúdo salvo no banco
type SiteConfigContentData = {
  termsOfService: string | null;
  privacyPolicy: string | null;
  footerLinks: FooterLink[] | null;
  otherAnalyticsScripts: string | null;
};

type SiteConfigState = {
  config: SiteConfig;
  isLoading: boolean;
  error: string | null;
  setConfig: (config: Partial<SiteConfig>) => void;
  setTheme: (theme: Partial<SiteTheme>) => void;
  saveConfig: () => Promise<void>;
  loadConfig: () => Promise<void>;
  resetConfig: () => void;
};

// Valores padrão para o tema do site
const defaultTheme: SiteTheme = {
  primaryColor: '#a67c52',
  secondaryColor: '#0f1013',
  accentColor: '#d4af7a',
  textColor: '#ffffff',
  backgroundColor: '#0f1013',
  borderColor: '#2d2d2d',
};

// Configuração padrão para o site
const defaultConfig: SiteConfig = {
  name: 'Marquiore Films',
  logoUrl: null,
  faviconUrl: null,
  theme: defaultTheme,
  footerText: '© 2024 Marquiore Films - Todos os direitos reservados',
  termsOfService: null,
  privacyPolicy: null,
  footerLinks: null,
  googleAnalyticsId: null,
  metaPixelId: null,
  otherAnalyticsScripts: null,
};

export const useSiteConfigStore = create<SiteConfigState>()(
  persist(
    (set, get) => ({
      config: defaultConfig,
      isLoading: false,
      error: null,
      
      setConfig: (config) => set((state) => ({ 
        config: { ...state.config, ...config }
      })),
      
      setTheme: (theme) => set((state) => ({ 
        config: { 
          ...state.config, 
          theme: { ...state.config.theme, ...theme }
        }
      })),
      
      saveConfig: async () => {
        set({ isLoading: true, error: null });
        try {
          const { config } = get();
          const { theme, ...rest } = config;
          
          // Aqui transformamos os objetos complexos para JSON para armazenar no DB
          const footerLinksJson = rest.footerLinks ? JSON.stringify(rest.footerLinks) : null;
          
          // Salva a configuração no banco de dados
          const savedConfig = await prisma.siteConfig.upsert({
            where: { id: config.id || 1 },
            update: {
              name: rest.name,
              logoUrl: rest.logoUrl,
              faviconUrl: rest.faviconUrl,
              primaryColor: theme.primaryColor,
              secondaryColor: theme.secondaryColor,
              accentColor: theme.accentColor,
              textColor: theme.textColor,
              backgroundColor: theme.backgroundColor,
              footerText: rest.footerText,
              // Para campos complexos, utilizamos dados adicionais
              // Sem incluir o campo content se não existir na definição do Prisma
              googleAnalyticsId: rest.googleAnalyticsId,
              metaPixelId: rest.metaPixelId,
            },
            create: {
              name: rest.name,
              logoUrl: rest.logoUrl,
              faviconUrl: rest.faviconUrl,
              primaryColor: theme.primaryColor,
              secondaryColor: theme.secondaryColor,
              accentColor: theme.accentColor,
              textColor: theme.textColor,
              backgroundColor: theme.backgroundColor,
              footerText: rest.footerText,
              // Para campos complexos, utilizamos dados adicionais
              // Sem incluir o campo content se não existir na definição do Prisma
              googleAnalyticsId: rest.googleAnalyticsId,
              metaPixelId: rest.metaPixelId,
            },
          });
          
          // Atualiza o estado com o ID retornado
          set({ 
            config: { 
              ...config, 
              id: savedConfig.id 
            },
            isLoading: false
          });
        } catch (error) {
          console.error('Erro ao salvar a configuração:', error);
          set({ 
            error: 'Falha ao salvar as configurações. Tente novamente.',
            isLoading: false
          });
        }
      },
      
      loadConfig: async () => {
        set({ isLoading: true, error: null });
        try {
          // Busca a configuração do banco de dados
          const dbConfig = await prisma.siteConfig.findFirst({
            where: { id: 1 }
          });
          
          if (dbConfig) {
            // Alterando para não utilizar a propriedade content que não existe
            // Transformando diretamente o formato do banco para o formato do estado
            const loadedConfig: SiteConfig = {
              id: dbConfig.id,
              name: dbConfig.name,
              logoUrl: dbConfig.logoUrl,
              faviconUrl: dbConfig.faviconUrl,
              theme: {
                primaryColor: dbConfig.primaryColor,
                secondaryColor: dbConfig.secondaryColor,
                accentColor: dbConfig.accentColor,
                textColor: dbConfig.textColor,
                backgroundColor: dbConfig.backgroundColor,
                borderColor: '#2d2d2d', // Valor padrão se não estiver salvo
              },
              footerText: dbConfig.footerText,
              // Valores padrão para os campos complexos que não estão no esquema
              termsOfService: null,
              privacyPolicy: null,
              footerLinks: null,
              otherAnalyticsScripts: null,
              googleAnalyticsId: dbConfig.googleAnalyticsId,
              metaPixelId: dbConfig.metaPixelId,
            };
            
            set({ config: loadedConfig, isLoading: false });
          } else {
            set({ config: defaultConfig, isLoading: false });
          }
        } catch (error) {
          console.error('Erro ao carregar a configuração:', error);
          set({ 
            error: 'Falha ao carregar as configurações. Usando valores padrão.',
            isLoading: false,
            config: defaultConfig
          });
        }
      },
      
      resetConfig: () => set({ config: defaultConfig }),
    }),
    {
      name: 'site-config-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// Hook para conseguir as variáveis CSS do tema que serão aplicadas globalmente
export const useThemeVariables = () => {
  const theme = useSiteConfigStore((state) => state.config.theme);
  
  return {
    '--color-primary': theme.primaryColor,
    '--color-secondary': theme.secondaryColor,
    '--color-accent': theme.accentColor,
    '--color-text': theme.textColor,
    '--color-background': theme.backgroundColor,
    '--color-border': theme.borderColor,
  };
}; 