import { makeExecutableSchema } from '@graphql-tools/schema';
import translationResolvers from '../resolvers/translation/translation';
import answerResolvers from '../resolvers/answer/answer';
import classroomResolvers from '../resolvers/classroom/classroom';
import { importSchema } from 'graphql-import';
import merge from '../utils/merge';

const typeDefs = importSchema('src/schema/schema.graphql');

const resolvers = merge<any>([
  classroomResolvers,
  translationResolvers,
  answerResolvers
]);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

export default schema;