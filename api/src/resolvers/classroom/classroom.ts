import { AsyncResponse, Resolver } from "../../types/types";
import { makeSuccessfulResponse } from "../../utils/response-helpers";
import prisma from "../../client/client";
import { Classroom } from "@prisma/client";

const queries = {
  classrooms: async (): AsyncResponse<Classroom> => {
    const classrooms = await prisma.classroom.findMany();
    return makeSuccessfulResponse(classrooms);
  }
};

const mutations = {
  addClassroom: async (name: string): AsyncResponse<Classroom> => {
    const newClassroom = await prisma.classroom.create({
      data: {
        name,
      },
    });
    return makeSuccessfulResponse(newClassroom);
  },
};

export default {
  queries,
  mutations,
} as Resolver;