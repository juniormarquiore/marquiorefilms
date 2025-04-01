import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { prisma } from '@/lib/prisma';

export type Testimonial = {
  id: number;
  coupleName: string;
  eventDate: string;
  content: string;
  location: string | null;
  rating: number;
  photoUrl: string | null;
  isDisplayed: boolean;
  displayOrder: number;
};

type TestimonialsState = {
  testimonials: Testimonial[];
  isLoading: boolean;
  error: string | null;
  
  fetchTestimonials: () => Promise<void>;
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'displayOrder'>) => Promise<void>;
  updateTestimonial: (id: number, updates: Partial<Omit<Testimonial, 'id'>>) => Promise<void>;
  updateDisplayOrder: (id: number, newOrder: number) => Promise<void>;
  deleteTestimonial: (id: number) => Promise<void>;
  toggleDisplay: (id: number) => Promise<void>;
};

export const useTestimonialsStore = create<TestimonialsState>()(
  persist(
    (set, get) => ({
      testimonials: [],
      isLoading: false,
      error: null,

      fetchTestimonials: async () => {
        set({ isLoading: true, error: null });
        try {
          const dbTestimonials = await prisma.testimonialItem.findMany({
            orderBy: { displayOrder: 'asc' },
          });

          const testimonials: Testimonial[] = dbTestimonials.map(item => ({
            id: item.id,
            coupleName: item.coupleName,
            eventDate: item.eventDate.toISOString().split('T')[0],
            content: item.content,
            location: item.location,
            rating: item.rating,
            photoUrl: item.photoUrl,
            isDisplayed: item.isDisplayed,
            displayOrder: item.displayOrder,
          }));

          set({ testimonials, isLoading: false });
        } catch (error) {
          console.error('Erro ao buscar depoimentos:', error);
          set({
            error: 'Não foi possível carregar os depoimentos. Tente novamente.',
            isLoading: false,
          });
        }
      },

      addTestimonial: async (testimonial) => {
        set({ isLoading: true, error: null });
        try {
          // Determina a ordem de exibição para o novo item
          const { testimonials } = get();
          const maxOrder = testimonials.length > 0
            ? Math.max(...testimonials.map(t => t.displayOrder))
            : 0;

          // Cria o novo depoimento no banco de dados
          const newTestimonial = await prisma.testimonialItem.create({
            data: {
              coupleName: testimonial.coupleName,
              eventDate: new Date(testimonial.eventDate),
              content: testimonial.content,
              location: testimonial.location,
              rating: testimonial.rating,
              photoUrl: testimonial.photoUrl,
              isDisplayed: testimonial.isDisplayed,
              displayOrder: maxOrder + 1,
            },
          });

          // Adiciona o depoimento ao estado
          const newItem: Testimonial = {
            id: newTestimonial.id,
            coupleName: newTestimonial.coupleName,
            eventDate: newTestimonial.eventDate.toISOString().split('T')[0],
            content: newTestimonial.content,
            location: newTestimonial.location,
            rating: newTestimonial.rating,
            photoUrl: newTestimonial.photoUrl,
            isDisplayed: newTestimonial.isDisplayed,
            displayOrder: newTestimonial.displayOrder,
          };

          set(state => ({
            testimonials: [...state.testimonials, newItem],
            isLoading: false,
          }));
        } catch (error) {
          console.error('Erro ao adicionar depoimento:', error);
          set({
            error: 'Falha ao adicionar o depoimento. Tente novamente.',
            isLoading: false,
          });
        }
      },

      updateTestimonial: async (id, updates) => {
        set({ isLoading: true, error: null });
        try {
          const data: any = { ...updates };
          
          // Converte a string de data para o formato Date se presente
          if (updates.eventDate) {
            data.eventDate = new Date(updates.eventDate);
          }

          // Atualiza o depoimento no banco de dados
          await prisma.testimonialItem.update({
            where: { id },
            data,
          });

          // Atualiza o depoimento no estado
          set(state => ({
            testimonials: state.testimonials.map(item =>
              item.id === id ? { ...item, ...updates } : item
            ),
            isLoading: false,
          }));
        } catch (error) {
          console.error('Erro ao atualizar depoimento:', error);
          set({
            error: 'Falha ao atualizar o depoimento. Tente novamente.',
            isLoading: false,
          });
        }
      },

      updateDisplayOrder: async (id, newOrder) => {
        set({ isLoading: true, error: null });
        try {
          // Atualiza a ordem de exibição no banco de dados
          await prisma.testimonialItem.update({
            where: { id },
            data: { displayOrder: newOrder },
          });

          // Atualiza a ordem de exibição no estado
          set(state => ({
            testimonials: state.testimonials.map(item =>
              item.id === id ? { ...item, displayOrder: newOrder } : item
            ).sort((a, b) => a.displayOrder - b.displayOrder),
            isLoading: false,
          }));
        } catch (error) {
          console.error('Erro ao atualizar ordem de exibição:', error);
          set({
            error: 'Falha ao atualizar a ordem de exibição. Tente novamente.',
            isLoading: false,
          });
        }
      },

      deleteTestimonial: async (id) => {
        set({ isLoading: true, error: null });
        try {
          // Remove o depoimento do banco de dados
          await prisma.testimonialItem.delete({
            where: { id },
          });

          // Remove o depoimento do estado
          set(state => ({
            testimonials: state.testimonials.filter(item => item.id !== id),
            isLoading: false,
          }));
        } catch (error) {
          console.error('Erro ao excluir depoimento:', error);
          set({
            error: 'Falha ao excluir o depoimento. Tente novamente.',
            isLoading: false,
          });
        }
      },

      toggleDisplay: async (id) => {
        set({ isLoading: true, error: null });
        try {
          const { testimonials } = get();
          const testimonial = testimonials.find(item => item.id === id);
          
          if (!testimonial) {
            throw new Error('Depoimento não encontrado');
          }

          // Inverte o estado de exibição no banco de dados
          await prisma.testimonialItem.update({
            where: { id },
            data: { isDisplayed: !testimonial.isDisplayed },
          });

          // Atualiza o estado de exibição no estado
          set(state => ({
            testimonials: state.testimonials.map(item =>
              item.id === id ? { ...item, isDisplayed: !item.isDisplayed } : item
            ),
            isLoading: false,
          }));
        } catch (error) {
          console.error('Erro ao alterar visibilidade do depoimento:', error);
          set({
            error: 'Falha ao alterar a visibilidade. Tente novamente.',
            isLoading: false,
          });
        }
      },
    }),
    {
      name: 'testimonials-storage',
    }
  )
); 