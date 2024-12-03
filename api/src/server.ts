import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';


import { importSchema } from 'graphql-import';
import resolvers from './resolvers/classroom/classroom';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
const typeDefs = importSchema('src/schema/schema.graphql');

const prisma = new PrismaClient();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  context: { prisma },
  customFormatErrorFn: (err) => {
    console.error(err);
    return err;
  },
}));

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});