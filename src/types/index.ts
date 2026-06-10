// Type definitions for the GraphQL API

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  postId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
}

export interface UpdateUserInput {
  id: string;
  name?: string;
  email?: string;
}

export interface CreatePostInput {
  userId: string;
  title: string;
  content: string;
}

export interface CreateCommentInput {
  postId: string;
  userId: string;
  content: string;
}
