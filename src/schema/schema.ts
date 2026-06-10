import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    posts: [Post!]!
    createdAt: String!
    updatedAt: String!
  }

  type Post {
    id: String!
    title: String!
    content: String!
    author: User!
    authorId: String!
    comments: [Comment!]!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    id: String!
    content: String!
    post: Post!
    postId: String!
    author: User!
    userId: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
    posts: [Post!]!
    post(id: String!): Post
    comments(postId: String!): [Comment!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: String!, name: String, email: String): User!
    deleteUser(id: String!): Boolean!

    createPost(userId: String!, title: String!, content: String!): Post!
    updatePost(id: String!, title: String, content: String): Post!
    deletePost(id: String!): Boolean!

    createComment(postId: String!, userId: String!, content: String!): Comment!
    deleteComment(id: String!): Boolean!
  }
`;
