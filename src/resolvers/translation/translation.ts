import prisma from "../../client/client";

export default {
  translations: () => {
    return prisma.profile.findMany();
  }
};       