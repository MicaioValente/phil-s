export interface CreateStoryParams {
    typeStory: 'VIDEO' | "IMAGE",
    duration: number,
    url: string,
    extension: string,
    location: string,
    highlights: boolean,
    filename: string,
    width?: number,
    height?: number
}

export interface CreateStoryRequest {
    userId: string,
    media: {
      type: string,
      url: string,
      title?: string | null,
      author?: string | null,
      imageUrl?: string | null,
      duration?: number | null,
      thumbnailUrl?: string | null,
      filename?: string | null,
      width?: number,
      height?: number
    },
    location: string,
    highlight: boolean,
    type?: 'VIDEO' | 'IMAGE',
    isDeleted?: boolean
}

export type CreateStoryResponse = Promise<any>;
