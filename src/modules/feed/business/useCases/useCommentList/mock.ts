export const comments: CommentItemModel[] = [
    {
      parentCommentId: "",
      createdAt: "2024-09-15T12:00:00Z",
      comment: {
        id: "c1",
        content: "Great post! Really enjoyed it.",
        likes: 32,
        isDeleted: false,
      },
      post: {
        id: "p1",
      },
      user: {
        id: "u1",
        name: "John Doe",
        image: "https://picsum.photos/200?random=1",  // Imagem aleatória
        address: "123 Main St, New York, NY",
      },
    },
    {
      parentCommentId: "c1",  // Resposta ao comentário c1
      createdAt: "2024-09-15T12:05:00Z",
      comment: {
        id: "c2",
        content: "Thanks! Glad you liked it!",
        likes: 10,
        isDeleted: false,
      },
      post: {
        id: "p1",
      },
      user: {
        id: "u2",
        name: "Jane Smith",
        image: "https://picsum.photos/200?random=2",  // Imagem aleatória
        address: "456 Oak Ave, Los Angeles, CA",
      },
    },
    {
      parentCommentId: "",
      createdAt: "2024-09-14T10:30:00Z",
      comment: {
        id: "c3",
        content: "Awesome picture!",
        likes: 45,
        isDeleted: false,
      },
      post: {
        id: "p2",
      },
      user: {
        id: "u3",
        name: "David Johnson",
        image: "https://picsum.photos/200?random=3",  // Imagem aleatória
        address: "789 Pine Rd, Miami, FL",
      },
    },
    {
      parentCommentId: "c3",  // Resposta ao comentário c3
      createdAt: "2024-09-14T10:35:00Z",
      comment: {
        id: "c4",
        content: "Totally agree! Stunning shot!",
        likes: 20,
        isDeleted: false,
      },
      post: {
        id: "p2",
      },
      user: {
        id: "u4",
        name: "Emily Davis",
        image: "https://picsum.photos/200?random=4",  // Imagem aleatória
        address: "987 Maple St, Boston, MA",
      },
    },
    {
      parentCommentId: "c3",  // Resposta ao comentário c3
      createdAt: "2024-09-14T10:35:00Z",
      comment: {
        id: "c90",
        content: "Totally agree! Stunning shot!",
        likes: 20,
        isDeleted: false,
      },
      post: {
        id: "p2",
      },
      user: {
        id: "u4",
        name: "Emily Davis",
        image: "https://picsum.photos/200?random=4",  // Imagem aleatória
        address: "987 Maple St, Boston, MA",
      },
    },
    {
      parentCommentId: "",
      createdAt: "2024-09-13T08:15:00Z",
      comment: {
        id: "c5",
        content: "Love this!",
        likes: 58,
        isDeleted: false,
      },
      post: {
        id: "p3",
      },
      user: {
        id: "u5",
        name: "Michael Brown",
        image: "https://picsum.photos/200?random=5",  // Imagem aleatória
        address: "345 Cedar Dr, Chicago, IL",
      },
    },
    {
      parentCommentId: "c5",  // Resposta ao comentário c5
      createdAt: "2024-09-13T08:20:00Z",
      comment: {
        id: "c6",
        content: "Me too! This post is awesome.",
        likes: 15,
        isDeleted: false,
      },
      post: {
        id: "p3",
      },
      user: {
        id: "u6",
        name: "Sophia White",
        image: "https://picsum.photos/200?random=6",  // Imagem aleatória
        address: "567 Elm Ln, Austin, TX",
      },
    },
    {
      parentCommentId: "",
      createdAt: "2024-09-12T17:45:00Z",
      comment: {
        id: "c7",
        content: "This is amazing! Keep it up!",
        likes: 22,
        isDeleted: false,
      },
      post: {
        id: "p4",
      },
      user: {
        id: "u7",
        name: "Olivia Green",
        image: "https://picsum.photos/200?random=7",  // Imagem aleatória
        address: "789 Birch Rd, Seattle, WA",
      },
    },
    {
      parentCommentId: "",
      createdAt: "2024-09-11T14:00:00Z",
      comment: {
        id: "c8",
        content: "I can’t wait to see more!",
        likes: 30,
        isDeleted: false,
      },
      post: {
        id: "p5",
      },
      user: {
        id: "u8",
        name: "Liam Martinez",
        image: "https://picsum.photos/200?random=8",  // Imagem aleatória
        address: "123 Spruce St, Denver, CO",
      },
    },
    {
      parentCommentId: "c8",  // Resposta ao comentário c8
      createdAt: "2024-09-11T14:10:00Z",
      comment: {
        id: "c9",
        content: "You’ll love the next post!",
        likes: 25,
        isDeleted: false,
      },
      post: {
        id: "p5",
      },
      user: {
        id: "u9",
        name: "Isabella Hernandez",
        image: "https://picsum.photos/200?random=9",  // Imagem aleatória
        address: "456 Oak Ave, Miami, FL",
      },
    },
    {
      parentCommentId: "",
      createdAt: "2024-09-10T09:30:00Z",
      comment: {
        id: "c10",
        content: "Beautiful capture, as always!",
        likes: 50,
        isDeleted: false,
      },
      post: {
        id: "p6",
      },
      user: {
        id: "u10",
        name: "Noah Garcia",
        image: "https://picsum.photos/200?random=10",  // Imagem aleatória
        address: "789 Fir St, Portland, OR",
      },
    }
  ];
  