import { makeErrorResponse, makeSuccessfulResponse } from "@/utils/response-helpers";
import prisma from "../../client/client";
import { AsyncResponse } from "@/types/types";
import { Question } from "@prisma/client";

const doesQuestionExist = async (question: string) => {
  const existingQuestion = await prisma.question.findFirst({
    where: {
      question
    },
  });
  return existingQuestion ? true : false;
};

const Query = {
  questions: async (): AsyncResponse<Question[]> => {
    const questions = await prisma.question.findMany();
    return questions;
  }
};

const Mutation = {
  addQuestion: async ({ question, correctAnswer, classroomId }: {
    question: string;
    correctAnswer: string;
    classroomId: string;
  }): AsyncResponse<Question> => {
    const questionExists = await doesQuestionExist(question);
    if (questionExists) {
      return makeErrorResponse(new Error('Question already exists'));
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
    return makeSuccessfulResponse(newQuestion);
  },
};

export default {
  Query,
  Mutation
};