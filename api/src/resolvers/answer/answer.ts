import { AsyncResponse, Resolver } from "../../types/types";
import prisma from "../../client/client";
import { Answer } from "@prisma/client";

const Mutation = {
    async addAnswer (questionId: string, value: string): AsyncResponse<boolean> {
        const question = await prisma.question.findUnique({
            where: {
                id: questionId,
            },
        });
        if (!question) {
            return {
                success: false,
                error: new Error('Question not found'),
            };
        }
        const isCorrect = question?.correctAnswer === value;
        prisma.answer.create({
            data: {
                question: {
                    connect: {
                        id: questionId,
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

const Query = {
    async answers (): AsyncResponse<Answer[]> {
        const answers = await prisma.answer.findMany();
        return {
            success: true,
            data: answers,
        };
    }
}

export default {
    Query,
    Mutation
  };