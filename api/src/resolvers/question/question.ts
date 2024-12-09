import { AddQuestionArgs } from "@/types/resolvers";
import prisma from "../../client/client";

const doesQuestionExist = async (question: string) => {
  const existingQuestion = await prisma.question.findFirst({
    where: {
      question
    },
  });
  return existingQuestion ? true : false;
};

const Query = {
  questions: async () => {
    const questions = await prisma.question.findMany();
    return questions;
  }
};

const Mutation = {
  addQuestion: async ({ question, correctAnswer, classroomId }: AddQuestionArgs) => {
    const questionExists = await doesQuestionExist(question);
    if (questionExists) {
      return new Error('Question already exists');
    }

    const newQuestion = await prisma.question.create({
      data: {
        question,
        correctAnswer,
        classroom: {
          connect: {
            id: classroomId
          }
        }
      },
    });
    return newQuestion;
  },
};

export default {
  Query,
  Mutation
};