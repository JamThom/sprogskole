import { makeExecutableSchema } from '@graphql-tools/schema';
import translationResolvers from '../resolvers/translation/translation';
import answerResolvers from '../resolvers/answer/answer';
import classroomResolvers from '../resolvers/classroom/classroom';
import { importSchema } from 'graphql-import';

const typeDefs = importSchema('src/schema/schema.graphql');

export const schema = makeExecutableSchema({
  resolvers: {
    Query: {
      ...translationResolvers.queries,
      ...answerResolvers.queries,
      ...classroomResolvers.queries
    },
    Mutation: {
      ...translationResolvers.mutations,
      ...answerResolvers.mutations,
      ...classroomResolvers.mutations
    },
  },
  typeDefs
});