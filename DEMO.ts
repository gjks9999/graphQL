/**
 * Demo Application - GraphQL Firebase Backend
 *
 * This file demonstrates various GraphQL queries and mutations
 * that can be executed against the GraphQL server.
 *
 * Copy and paste these examples into the GraphQL Playground
 * at http://localhost:4000/graphql
 */

// ============================================
// DEMO 1: Create a User
// ============================================
const createUserDemo = `
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
    createdAt
    updatedAt
  }
}
`;

const createUserVariables = {
  name: "John Doe",
  email: "john.doe@example.com",
};

// ============================================
// DEMO 2: Get All Users
// ============================================
const getAllUsersDemo = `
query {
  users {
    id
    name
    email
    createdAt
  }
}
`;

// ============================================
// DEMO 3: Get User by ID with Posts
// ============================================
const getUserWithPostsDemo = `
query GetUser($userId: String!) {
  user(id: $userId) {
    id
    name
    email
    posts {
      id
      title
      content
      createdAt
    }
    createdAt
  }
}
`;

const getUserVariables = {
  userId: "user_id_here",
};

// ============================================
// DEMO 4: Create a Post
// ============================================
const createPostDemo = `
mutation CreatePost($userId: String!, $title: String!, $content: String!) {
  createPost(userId: $userId, title: $title, content: $content) {
    id
    title
    content
    authorId
    createdAt
  }
}
`;

const createPostVariables = {
  userId: "user_id_here",
  title: "My First GraphQL Post",
  content:
    "This is a demo post created through GraphQL mutations. It demonstrates the power of combining Apollo Server with Firebase!",
};

// ============================================
// DEMO 5: Get All Posts with Author and Comments. ## workig
// ============================================
const getAllPostsDemo = `
query {
  posts {
    id
    title
    content
    author {
      id
      name
      email
    }
    comments {
      id
      content
      author {
        name
      }
      createdAt
    }
    createdAt
    updatedAt
  }
}
`;

// ============================================
// DEMO 6: Get Single Post
// ============================================
const getPostDemo = `
query GetPost($postId: String!) {
  post(id: $postId) {
    id
    title
    content
    author {
      id
      name
      email
    }
    comments {
      id
      content
      author {
        name
        email
      }
      createdAt
    }
    createdAt
    updatedAt
  }
}
`;

const getPostVariables = {
  postId: "post_id_here",
};

// ============================================
// DEMO 7: Create a Comment
// ============================================
const createCommentDemo = `
mutation CreateComment($postId: String!, $userId: String!, $content: String!) {
  createComment(postId: $postId, userId: $userId, content: $content) {
    id
    content
    postId
    userId
    createdAt
  }
}
`;

const createCommentVariables = {
  postId: "post_id_here",
  userId: "user_id_here",
  content:
    "Great post! I really enjoyed reading about GraphQL and Firebase integration.",
};

// ============================================
// DEMO 8: Get Comments for a Post
// ============================================
const getCommentsDemo = `
query GetComments($postId: String!) {
  comments(postId: $postId) {
    id
    content
    author {
      id
      name
      email
    }
    createdAt
  }
}
`;

const getCommentsVariables = {
  postId: "post_id_here",
};

// ============================================
// DEMO 9: Update User
// ============================================
const updateUserDemo = `
mutation UpdateUser($id: String!, $name: String!, $email: String!) {
  updateUser(id: $id, name: $name, email: $email) {
    id
    name
    email
    updatedAt
  }
}
`;

const updateUserVariables = {
  id: "user_id_here",
  name: "Jane Doe",
  email: "jane.doe@example.com",
};

// ============================================
// DEMO 10: Update Post
// ============================================
const updatePostDemo = `
mutation UpdatePost($id: String!, $title: String!, $content: String!) {
  updatePost(id: $id, title: $title, content: $content) {
    id
    title
    content
    updatedAt
  }
}
`;

const updatePostVariables = {
  id: "post_id_here",
  title: "Updated Title",
  content: "Updated content with more information.",
};

// ============================================
// DEMO 11: Delete Comment
// ============================================
const deleteCommentDemo = `
mutation DeleteComment($id: String!) {
  deleteComment(id: $id)
}
`;

const deleteCommentVariables = {
  id: "comment_id_here",
};

// ============================================
// DEMO 12: Delete Post
// ============================================
const deletePostDemo = `
mutation DeletePost($id: String!) {
  deletePost(id: $id)
}
`;

const deletePostVariables = {
  id: "post_id_here",
};

// ============================================
// DEMO 13: Delete User
// ============================================
const deleteUserDemo = `
mutation DeleteUser($id: String!) {
  deleteUser(id: $id)
}
`;

const deleteUserVariables = {
  id: "user_id_here",
};

export const demos = {
  createUser: {
    query: createUserDemo,
    variables: createUserVariables,
    description: "Create a new user with name and email",
  },
  getAllUsers: {
    query: getAllUsersDemo,
    description: "Fetch all users in the system",
  },
  getUserWithPosts: {
    query: getUserWithPostsDemo,
    variables: getUserVariables,
    description: "Fetch a specific user with all their posts",
  },
  createPost: {
    query: createPostDemo,
    variables: createPostVariables,
    description: "Create a new post by a user",
  },
  getAllPosts: {
    query: getAllPostsDemo,
    description: "Fetch all posts with authors and comments",
  },
  getPost: {
    query: getPostDemo,
    variables: getPostVariables,
    description: "Fetch a single post with all comments",
  },
  createComment: {
    query: createCommentDemo,
    variables: createCommentVariables,
    description: "Create a comment on a post",
  },
  getComments: {
    query: getCommentsDemo,
    variables: getCommentsVariables,
    description: "Fetch all comments for a post",
  },
  updateUser: {
    query: updateUserDemo,
    variables: updateUserVariables,
    description: "Update user information",
  },
  updatePost: {
    query: updatePostDemo,
    variables: updatePostVariables,
    description: "Update post title and content",
  },
  deleteComment: {
    query: deleteCommentDemo,
    variables: deleteCommentVariables,
    description: "Delete a comment",
  },
  deletePost: {
    query: deletePostDemo,
    variables: deletePostVariables,
    description: "Delete a post",
  },
  deleteUser: {
    query: deleteUserDemo,
    variables: deleteUserVariables,
    description: "Delete a user",
  },
};
