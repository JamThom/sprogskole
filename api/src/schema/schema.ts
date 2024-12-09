import questionResolvers from '../resolvers/question/question';
import answerResolvers from '../resolvers/answer/answer';
import classroomResolvers from '../resolvers/classroom/classroom';
import { importSchema } from 'graphql-import';
import { buildSchema } from "graphql";

const typeDefs = importSchema('src/schema/schema.graphql');

const rootValue = {
  addQuestion: questionResolvers.Mutation.addQuestion,
  addAnswer: answerResolvers.Mutation.addAnswer,
  addClassroom: classroomResolvers.Mutation.addClassroom,
  questions: questionResolvers.Query.questions,
  answers: answerResolvers.Query.answers,
  classrooms: classroomResolvers.Query.classrooms,
}

const schema = buildSchema(typeDefs);

export default { schema, rootValue };