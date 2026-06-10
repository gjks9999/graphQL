# GraphQL Firebase Backend - Setup Complete ✅

## Project Overview

A professional TypeScript GraphQL backend service with:
- Apollo Server (Express.js integration)
- Firebase Firestore database
- Complete CRUD API for Users, Posts, and Comments
- Full TypeScript type safety

## Project Structure

```
src/
├── index.ts                 # Main server (Express + Apollo)
├── config/firebase.ts       # Configuration management
├── schema/schema.ts         # GraphQL type definitions
├── resolvers/               # Query/Mutation implementations
│   ├── userResolver.ts
│   ├── postResolver.ts
│   ├── commentResolver.ts
│   └── index.ts            # Resolver exports
├── types/index.ts          # TypeScript interfaces
└── services/firebaseService.ts  # Firestore operations

Configuration Files:
├── package.json            # Dependencies & scripts
├── tsconfig.json          # TypeScript config
├── .env                   # Environment variables (local)
├── .env.example          # Template for .env
├── .eslintrc.json        # Code linting rules
├── .gitignore            # Git ignore patterns
└── DEMO.ts               # 13 example queries/mutations
```

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase

Edit `.env` with your Firebase project credentials:
```
FIREBASE_API_KEY=your_key
FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

### 3. Set Up Firebase Service Account (Server)

For Node.js backend authentication, place your Firebase service account JSON at the root as `firebase-service-account.json`

### 4. Build & Run

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

The server runs on `http://localhost:4000/graphql`

## API Endpoints - Queries

### users
Get all users
```graphql
query {
  users { id name email createdAt }
}
```

### user(id)
Get single user with posts
```graphql
query {
  user(id: "user-123") {
    id name email
    posts { id title content }
  }
}
```

### posts
Get all posts with authors and comments
```graphql
query {
  posts {
    id title content
    author { name }
    comments { id content author { name } }
  }
}
```

### post(id)
Get single post
```graphql
query {
  post(id: "post-123") {
    id title content
    author { name email }
    comments { id content author { name } }
  }
}
```

### comments(postId)
Get comments for a post
```graphql
query {
  comments(postId: "post-123") {
    id content
    author { name email }
    createdAt
  }
}
```

## API Endpoints - Mutations

### createUser(name, email)
```graphql
mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id name email createdAt
  }
}
```

### createPost(userId, title, content)
```graphql
mutation {
  createPost(
    userId: "user-123"
    title: "My First Post"
    content: "Post content here"
  ) {
    id title authorId createdAt
  }
}
```

### createComment(postId, userId, content)
```graphql
mutation {
  createComment(
    postId: "post-123"
    userId: "user-123"
    content: "Great post!"
  ) {
    id content createdAt
  }
}
```

### updateUser(id, name, email)
```graphql
mutation {
  updateUser(
    id: "user-123"
    name: "Jane Doe"
    email: "jane@example.com"
  ) {
    id name email updatedAt
  }
}
```

### updatePost(id, title, content)
```graphql
mutation {
  updatePost(
    id: "post-123"
    title: "Updated Title"
    content: "Updated content"
  ) {
    id title updatedAt
  }
}
```

### deleteComment(id)
```graphql
mutation {
  deleteComment(id: "comment-123")
}
```

### deletePost(id)
```graphql
mutation {
  deletePost(id: "post-123")
}
```

### deleteUser(id)
```graphql
mutation {
  deleteUser(id: "user-123")
}
```

## Demo Examples

13 complete example queries/mutations available in [DEMO.ts](./DEMO.ts):
- User CRUD operations
- Post CRUD operations
- Comment creation/deletion
- Nested queries with relationships
- Variable usage examples

Copy any query/mutation from DEMO.ts into the GraphQL Playground at `http://localhost:4000/graphql`

## Technologies

- **Runtime**: Node.js
- **Language**: TypeScript 5.0+
- **GraphQL Server**: Apollo Server 3 + Express
- **Database**: Firebase Firestore
- **Authentication**: Firebase Admin SDK
- **Code Quality**: ESLint, TypeScript strict mode

## Environment Variables

See `.env.example` for all available options:
- `PORT` - Server port (default: 4000)
- `NODE_ENV` - Development/production mode
- `FIREBASE_*` - Firebase project credentials

## Development Commands

```bash
npm run dev           # Start dev server with hot reload
npm run build         # Build TypeScript
npm run start         # Run built project
npm run type-check    # Check types without building
npm run lint          # Run ESLint
npm test              # Run tests (Jest configured)
```

## Next Steps

1. Replace `.env` Firebase credentials with your project
2. Run `npm run dev` to start the server
3. Visit `http://localhost:4000/graphql` for GraphQL Playground
4. Try example queries from DEMO.ts
5. Connect your frontend application to the GraphQL endpoint

## Additional Features You Can Add

- Authentication middleware (JWT/Firebase Auth)
- Rate limiting
- Database indexing for better performance
- Subscription support (real-time updates)
- File upload handling
- Pagination for queries
- Caching strategies
- Error handling middleware

## Support

For Firebase setup help: https://firebase.google.com/docs
For Apollo Server docs: https://www.apollographql.com/docs/apollo-server/
For GraphQL documentation: https://graphql.org/learn/

---

**Project created**: June 5, 2026
**Status**: Ready for Development ✅
