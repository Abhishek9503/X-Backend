import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { prismaClient } from '../clients/db';

import { User } from './user';

export async function initServer() {
  const app = express();

  app.use(bodyParser.json())


  const graphqlServer = new ApolloServer({
    typeDefs: `
    ${User.types}
      type Query {
       ${User.queries}
      }
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
  });

  await graphqlServer.start();

  // Use the applyMiddleware function from 'apollo-server-express'
  graphqlServer.applyMiddleware({ app, path: '/graphql' });

  return app;
}
