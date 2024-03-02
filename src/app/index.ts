import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { prismaClient } from '../clients/db';



export async function initServer() {
  const app = express();

  app.use(bodyParser.json())


  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
       sayHello:String
      }
    `,
    resolvers: {
      Query: {
        sayHello:()=>`Hello from Gaphql server`,
      },
    },
  });

  await graphqlServer.start();

  // Use the applyMiddleware function from 'apollo-server-express'
  graphqlServer.applyMiddleware({ app, path: '/graphql' });

  return app;
}
