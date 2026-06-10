import * as firebaseService from '../services/firebaseService';
import { Comment, CreateCommentInput } from '../types/index';

export const commentResolver = {
  Query: {
    comments: async (
      _: any,
      { postId }: { postId: string }
    ): Promise<Comment[]> => {
      return await firebaseService.getCommentsByPostId(postId);
    },
  },

  Mutation: {
    createComment: async (
      _: any,
      { postId, userId, content }: CreateCommentInput
    ): Promise<Comment> => {
      return await firebaseService.createComment(postId, userId, content);
    },

    deleteComment: async (
      _: any,
      { id }: { id: string }
    ): Promise<boolean> => {
      return await firebaseService.deleteComment(id);
    },
  },

  Comment: {
    post: async (comment: Comment) => {
      return await firebaseService.getPost(comment.postId);
    },

    author: async (comment: Comment) => {
      return await firebaseService.getUser(comment.userId);
    },
  },
};
