import { AsyncResponse } from "../../types/types";
import { makeSuccessfulResponse } from "../../utils/response-helpers";
import prisma from "../../client/client";
import { Classroom } from "@prisma/client";

const Query = {
  classrooms: async () => {
    return await prisma.classroom.findMany();
  },
};

const Mutation = {
  addClassroom: async ({ name }: { name: string }): AsyncResponse<Classroom> => {
    const newClassroom = await prisma.classroom.create({
      data: {
        name,
        lastUpdated: new Date(),
      },
    });
    return makeSuccessfulResponse(newClassroom);
  },
};

const Classroom = {
  questions: async (parent: Classroom) => {
    return await prisma.question.findMany({
      where: {
        classroom: {
          id: parent.id
        }
      },
    });
  },
  statistics: async (parent: Classroom) => {
    const questions = await prisma.question.findMany({
      where: {
        classroom: {
          id: parent.id
        }
      },
    });

    const answers = await prisma.answer.findMany({
      where: {
        question: {
          classroom: {
            id: parent.id
          },
        },
      },
    });

    const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
    const incorrectAnswers = answers.length - correctAnswers;

    return {
      questions: questions.length,
      correctAnswers,
      incorrectAnswers,
    };
  },
};

export default { 
  Query,
  Mutation
};