import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { prisma } from '@/lib/prisma';

export type FileType = 'image' | 'video' | 'document' | 'other';

export interface FileItem {
  id: string | number;
  name: string;
  type: FileType;
  size: string;
  url: string;
  thumbnail?: string;
  dateUploaded: string;
}

type MediaFilesState = {
  files: FileItem[];
  isLoading: boolean;
  error: string | null;
  
  fetchFiles: () => Promise<void>;
  addFile: (file: Omit<FileItem, 'id' | 'dateUploaded'>) => Promise<void>;
  updateFile: (id: string | number, updates: Partial<Omit<FileItem, 'id'>>) => Promise<void>;
  deleteFile: (id: string | number) => Promise<void>;
  setError: (error: string | null) => void;
};

export const useMediaFilesStore = create<MediaFilesState>()(
  persist(
    (set, get) => ({
      files: [],
      isLoading: false,
      error: null,
      
      fetchFiles: async () => {
        set({ isLoading: true, error: null });
        try {
          // Busca todos os arquivos de mídia do banco de dados
          const dbFiles = await prisma.mediaFile.findMany({
            orderBy: { uploadedAt: 'desc' },
          });
          
          // Transforma o formato do banco para o formato do estado
          const files: FileItem[] = dbFiles.map(file => ({
            id: file.id,
            name: file.name,
            type: file.type as FileType,
            size: file.size,
            url: file.url,
            thumbnail: file.thumbnailUrl || undefined,
            dateUploaded: file.uploadedAt.toLocaleDateString('pt-BR'),
          }));
          
          set({ files, isLoading: false });
        } catch (error) {
          console.error('Erro ao buscar arquivos:', error);
          set({ 
            error: 'Não foi possível carregar os arquivos. Tente novamente.', 
            isLoading: false 
          });
        }
      },
      
      addFile: async (file) => {
        set({ isLoading: true, error: null });
        try {
          // Cria um novo arquivo no banco de dados
          const newFile = await prisma.mediaFile.create({
            data: {
              name: file.name,
              type: file.type,
              size: file.size,
              url: file.url,
              thumbnailUrl: file.thumbnail,
            },
          });
          
          // Adiciona o arquivo ao estado
          const fileItem: FileItem = {
            id: newFile.id,
            name: newFile.name,
            type: newFile.type as FileType,
            size: newFile.size,
            url: newFile.url,
            thumbnail: newFile.thumbnailUrl || undefined,
            dateUploaded: newFile.uploadedAt.toLocaleDateString('pt-BR'),
          };
          
          set(state => ({ 
            files: [fileItem, ...state.files],
            isLoading: false 
          }));
        } catch (error) {
          console.error('Erro ao adicionar arquivo:', error);
          set({ 
            error: 'Falha ao adicionar o arquivo. Tente novamente.', 
            isLoading: false 
          });
        }
      },
      
      updateFile: async (id, updates) => {
        set({ isLoading: true, error: null });
        try {
          // Atualiza o arquivo no banco de dados
          await prisma.mediaFile.update({
            where: { id: Number(id) },
            data: {
              name: updates.name,
              type: updates.type,
              size: updates.size,
              url: updates.url,
              thumbnailUrl: updates.thumbnail,
            },
          });
          
          // Atualiza o arquivo no estado
          set(state => ({
            files: state.files.map(file => 
              file.id === id ? { ...file, ...updates } : file
            ),
            isLoading: false
          }));
        } catch (error) {
          console.error('Erro ao atualizar arquivo:', error);
          set({ 
            error: 'Falha ao atualizar o arquivo. Tente novamente.', 
            isLoading: false 
          });
        }
      },
      
      deleteFile: async (id) => {
        set({ isLoading: true, error: null });
        try {
          // Remove o arquivo do banco de dados
          await prisma.mediaFile.delete({
            where: { id: Number(id) },
          });
          
          // Remove o arquivo do estado
          set(state => ({
            files: state.files.filter(file => file.id !== id),
            isLoading: false
          }));
        } catch (error) {
          console.error('Erro ao excluir arquivo:', error);
          set({ 
            error: 'Falha ao excluir o arquivo. Tente novamente.', 
            isLoading: false 
          });
        }
      },
      
      setError: (error) => set({ error }),
    }),
    {
      name: 'media-files-storage',
    }
  )
); 