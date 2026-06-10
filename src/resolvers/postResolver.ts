import * as firebaseService from '../services/firebaseService';
import { Post, CreatePostInput } from '../types/index';

export const postResolver = {
  Query: {
    posts: async (): Promise<Post[]> => {
      return await firebaseService.getAllPosts();
    },

    post: async (_: any, { id }: { id: string }): Promise<Post | null> => {
      return await firebaseService.getPost(id);
    },
  },

  Mutation: {
    createPost: async (
      _: any,
      { userId, title, content }: CreatePostInput
    ): Promise<Post> => {
      return await firebaseService.createPost(userId, title, content);
    },

    updatePost: async (
      _: any,
      { id, title, content }: { id: string; title?: string; content?: string }
    ): Promise<Post> => {
      const updates: Partial<Post> = {};
      if (title) updates.title = title;
      if (content) updates.content = content;

      return await firebaseService.updatePost(id, updates);
    },

    deletePost: async (_: any, { id }: { id: string }): Promise<boolean> => {
      return await firebaseService.deletePost(id);
    },
  },

  Post: {
    author: async (post: Post) => {
      return await firebaseService.getUser(post.authorId);
    },

    comments: async (post: Post) => {
      return await firebaseService.getCommentsByPostId(post.id);
    },
  },
};
