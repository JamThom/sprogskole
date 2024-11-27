import { AsyncResponse, Resolver } from "../../types/types";
import prisma from "../../client/client";

const mutations = {
    async addAnswer (translationId: number, value: string): AsyncResponse<boolean> {
        const translation = await prisma.translation.findUnique({
            where: {
                id: translationId,
            },
        });
        if (!translation) {
            return {
                success: false,
                error: new Error('Translation not found'),
            };
        }
        const isCorrect = translation?.translated === value;
        prisma.answer.create({
            data: {
                translation: {
                    connect: {
                        id: translationId,
                    },
                },
                value,
                isCorrect,
                date: new Date(),
            },
        });
        return {
            success: true,
            data: isCorrect,
        };
    }
}

const queries = {
    async getAnswers (): AsyncResponse<any> {
        const answers = await prisma.answer.findMany();
        return {
            success: true,
            data: answers,
        };
    }
}

export default {
  queries,
  mutations,
} as Resolver;