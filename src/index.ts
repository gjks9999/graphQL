import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers/index';
import { config } from './config/firebase';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express() as any;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = (config.port as number) || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
