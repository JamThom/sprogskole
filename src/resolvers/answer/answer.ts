import { AsyncResponse } from "../../types/types";
import prisma from "../../client/client";

export default {
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