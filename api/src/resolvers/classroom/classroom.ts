import { AsyncResponse, Resolver } from "../../types/types";
import { makeSuccessfulResponse } from "../../utils/response-helpers";
import prisma from "../../client/client";
import { Classroom } from "@prisma/client";

const Queries = {
  classrooms: async (): AsyncResponse<Classroom> => {
    const classrooms = await prisma.classroom.findMany();
    return makeSuccessfulResponse(classrooms);
  }
};

const Mutations = {
  addClassroom: async (name: string): AsyncResponse<Classroom> => {
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
  translations: async (parent: Classroom) => {
    return await prisma.translation.findMany({
      where: {
        classroom: {
          id: parent.id
        }
      },
    });
  },
  statistics: async (parent: Classroom) => {
    const translations = await prisma.translation.findMany({
      where: {
        classroom: {
          id: parent.id
        }
      },
    });

    const answers = await prisma.answer.findMany({
      where: {
        translation: {
          classroom: {
            id: parent.id
          },
        },
      },
    });

    const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
    const incorrectAnswers = answers.length - correctAnswers;

    return {
      translations: translations.length,
      correctAnswers,
      incorrectAnswers,
    };
  },
};

export default {
  Queries,
  Mutations,
  Classroom
} as Resolver;