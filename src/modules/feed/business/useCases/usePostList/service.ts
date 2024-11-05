import type { PostResponse } from '@modules/feed/business/useCases/usePostList/interfaces';
import { QueryKey } from '@tanstack/react-query';
import { postListAdapter } from '@modules/feed/business/useCases/usePostList/adapter';

export async function feedListService(pageParam: number, _: QueryKey) {
  const response: PostResponse = {
    items: [
      {
        id: 'post1',
        description: 'Explorando a cidade com um novo visual!',
        created_at: '2024-08-30T12:00:00Z',
        updated_at: '2024-08-30T12:00:00Z',
        subscriber_only: false,
        location: 'São Paulo',
        user: {
          id: 'user1',
          name: 'João Silva',
          image:
            'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM=',
        },
        media: [
          {
            id: 'media1',
            type: 'IMAGE',
            url: 'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM=',
          },
          {
            id: 'media2',
            type: 'IMAGE',
            url: 'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM=',
          },
          {
            id: 'media3',
            type: 'IMAGE',
            url: 'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM=',
          },
          {
            id: 'media4',
            type: 'IMAGE',
            url: 'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM=',
          },
        ],
        likes: 150,
        comments: 10,
        shares: 5,
      },
      {
        id: 'post2',
        description: 'Acabei de lançar uma nova música! Dê uma olhada!',
        created_at: '2024-08-29T14:30:00Z',
        updated_at: '2024-08-29T14:30:00Z',
        subscriber_only: true,
        location: 'Rio de Janeiro',

        user: {
          id: 'user2',
          name: 'Maria Oliveira',
          image:
            'https://media.istockphoto.com/id/1416048929/pt/foto/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=KZsArZtkHPcLekU3pRqhEoSH0cG0naA5t3jhzcSKJ2E=',
        },
        media: [
          {
            id: 'media2',
            song: {
              id: 'song1',
              name: 'Amanhecer',
              author: 'Maria Oliveira',
              created_at: '2024-08-29T14:00:00Z',
            },
            type: 'SONG',
            url: 'https://example.com/songs/song1.mp3',
          },
        ],
        likes: 230,
        comments: 25,
        shares: 12,
      },
      {
        id: 'post3',
        description: 'Dia de sol e muito skate!',
        created_at: '2024-08-28T09:45:00Z',
        updated_at: '2024-08-28T09:45:00Z',
        subscriber_only: false,
        location: 'Belo Horizonte',

        user: {
          id: 'user3',
          name: 'Carlos Mendes',
          image:
            'https://media.istockphoto.com/id/1446934118/pt/foto/happy-business-man-listening-to-a-discussion-in-an-office.jpg?s=612x612&w=0&k=20&c=_saW54gnOs2Qsrxc2WMJaZwJnvlm43vBryGU8WfhdK4=',
        },
        media: [
          {
            id: 'media3',
            type: 'VIDEO',
            url: 'https://videos.pond5.com/aerial-drone-flyover-jungle-tropical-footage-108607566_main_xxl.mp4',
          },
        ],
        likes: 80,
        comments: 15,
        shares: 8,
      },
      {
        id: 'post4',
        description: 'Uma refeição deliciosa para compartilhar com vocês!',
        created_at: '2024-08-27T18:20:00Z',
        updated_at: '2024-08-27T18:20:00Z',
        subscriber_only: false,
        location: 'Curitiba',

        user: {
          id: 'user4',
          name: 'Ana Souza',
          image:
            'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM=',
        },
        media: [
          {
            id: 'media4',
            type: 'IMAGE',
            url: 'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=J8IOft88XNXaMMjGBZUbbUVPPiDkxXO2uX5lxuWFRbM=',
          },
        ],
        likes: 120,
        comments: 8,
        shares: 3,
      },
    ],
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0,
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(2000);

  const responseFiltered: PostResponse = {
    ...response,
    items: response.items.filter(
      item =>
        item.media.filter(
          media => media.type === 'IMAGE' || media.type === 'VIDEO',
        ).length > 0,
    ),
  };

  return postListAdapter(responseFiltered);
}
