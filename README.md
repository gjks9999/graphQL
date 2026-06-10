# GraphQL Firebase Backend

A professional TypeScript GraphQL backend service with Firebase integration, Apollo Server, and complete CRUD operations.

## Features

- 🚀 Apollo Server with GraphQL
- 🔥 Firebase Firestore integration
- 📝 Complete CRUD operations (Users, Posts, Comments)
- 🔐 Environment configuration
- 🧪 TypeScript with strict type checking
- 📦 Modern package setup with dev tools

## Project Structure

```
src/
├── index.ts              # Main server entry point
├── config/
│   └── firebase.ts       # Firebase configuration
├── schema/
│   └── schema.ts         # GraphQL schema
├── resolvers/
│   ├── index.ts          # Resolver exports
│   ├── userResolver.ts   # User CRUD operations
│   ├── postResolver.ts   # Post CRUD operations
│   └── commentResolver.ts # Comment operations
├── types/
│   └── index.ts          # TypeScript types
└── services/
    └── firebaseService.ts # Firebase operations
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

Create a `.env` file in the root directory with your Firebase credentials:

```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

For server-side Firebase Admin SDK, place your service account JSON file at `./firebase-service-account.json`.

### 3. Run Development Server

```bash
npm run dev
```

The GraphQL server will start at `http://localhost:4000`

### 4. Access GraphQL Playground

Visit `http://localhost:4000/graphql` to explore the GraphQL API

## API Endpoints

### Queries

#### Get All Users

```graphql
query {
  users {
    id
    name
    email
    createdAt
  }
}
```

#### Get User by ID

```graphql
query {
  user(id: "user-id") {
    id
    name
    email
    posts {
      id
      title
      content
    }
  }
}
```

#### Get All Posts

```graphql
query {
  posts {
    id
    title
    content
    author {
      id
      name
    }
    comments {
      id
      content
      author {
        name
      }
    }
  }
}
```

### Mutations

#### Create User

```graphql
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
    createdAt
  }
}
```

Variables:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Create Post

```graphql
mutation CreatePost($userId: String!, $title: String!, $content: String!) {
  createPost(userId: $userId, title: $title, content: $content) {
    id
    title
    content
    authorId
    createdAt
  }
}
```

#### Create Comment

```graphql
mutation CreateComment($postId: String!, $userId: String!, $content: String!) {
  createComment(postId: $postId, userId: $userId, content: $content) {
    id
    content
    postId
    userId
    createdAt
  }
}
```

#### Update User

```graphql
mutation UpdateUser($id: String!, $name: String!, $email: String!) {
  updateUser(id: $id, name: $name, email: $email) {
    id
    name
    email
  }
}
```

#### Delete User

```graphql
mutation DeleteUser($id: String!) {
  deleteUser(id: $id)
}
```

## Development

### Type Checking

```bash
npm run type-check
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Technologies Used

- **Apollo Server** - GraphQL server implementation
- **TypeScript** - Type-safe JavaScript
- **Firebase** - Backend services and Firestore database
- **Node.js** - Runtime environment

## License

MIT
