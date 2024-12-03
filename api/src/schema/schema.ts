import { makeExecutableSchema } from '@graphql-tools/schema';
import translationResolvers from '../resolvers/translation/translation';
import answerResolvers from '../resolvers/answer/answer';
import classroomResolvers from '../resolvers/classroom/classroom';
import { importSchema } from 'graphql-import';
import merge from 'src/utils/merge';
import { Resolver } from 'src/types/types';

const typeDefs = importSchema('src/schema/schema.graphql');

export const schema = makeExecutableSchema(merge<{ typeDefs: string; } & Resolver>([
  translationResolvers,
  answerResolvers,
  classroomResolvers,
  { typeDefs },
]));