import { userResolver } from './userResolver';
import { postResolver } from './postResolver';
import { commentResolver } from './commentResolver';

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...postResolver.Query,
    ...commentResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
    ...postResolver.Mutation,
    ...commentResolver.Mutation,
  },

  User: userResolver.User,
  Post: postResolver.Post,
  Comment: commentResolver.Comment,
};
