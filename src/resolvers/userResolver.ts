import * as firebaseService from '../services/firebaseService';
import { User, CreateUserInput, UpdateUserInput } from '../types/index';

export const userResolver = {
  Query: {
    users: async (): Promise<User[]> => {
      return await firebaseService.getAllUsers();
    },

    user: async (
      _: any,
      { id }: { id: string }
    ): Promise<User | null> => {
      return await firebaseService.getUser(id);
    },
  },

  Mutation: {
    createUser: async (
      _: any,
      { name, email }: CreateUserInput
    ): Promise<User> => {
      return await firebaseService.createUser(name, email);
    },

    updateUser: async (
      _: any,
      { id, name, email }: UpdateUserInput
    ): Promise<User> => {
      const updates: Partial<User> = {};
      if (name) updates.name = name;
      if (email) updates.email = email;

      return await firebaseService.updateUser(id, updates);
    },

    deleteUser: async (_: any, { id }: { id: string }): Promise<boolean> => {
      return await firebaseService.deleteUser(id);
    },
  },

  User: {
    posts: async (user: User) => {
      return await firebaseService.getPostsByUserId(user.id);
    },
  },
};
