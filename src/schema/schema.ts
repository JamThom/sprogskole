import { makeExecutableSchema } from '@graphql-tools/schema';
import translationResolvers from '../resolvers/translation/translation';
import { importSchema } from 'graphql-import';

const typeDefs = importSchema('src/queries/translation/translation.graphql');

export const schema = makeExecutableSchema({
  resolvers: {
    Query: {
      ...translationResolvers.queries,
    },
    Mutation: {
      ...translationResolvers.mutations,
    },
  },
  typeDefs
});