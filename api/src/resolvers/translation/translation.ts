import { AsyncResponse, Resolver } from "../../types/types";
import { makeErrorResponse, makeSuccessfulResponse } from "../../utils/response-helpers";
import prisma from "../../client/client";
import { Translate } from "@google-cloud/translate/build/src/v2";
import { Translation } from "@prisma/client";

const translateApi = new Translate();

const getEnglishTranslation = async (text: string) => {
  const [translation] = await translateApi.translate(text, 'en');
  return translation;
};

const doesTranslationExist = async (original: string) => {
  const existingTranslation = await prisma.translation.findFirst({
    where: {
      original
    },
  });
  return existingTranslation ? true : false;
};

const Query = {
  translations: async () => {
    const translations = await prisma.translation.findMany();
    return translations;
  }
};

const Mutation = {
  addTranslation: async (name: string, classrooomId: string): AsyncResponse<Translation> => {
    let translatedText;
    const translationExists = await doesTranslationExist(name);
    if (translationExists) {
      return makeErrorResponse(new Error('Translation already exists'));
    }
    try {
      translatedText = await getEnglishTranslation(name);
    } catch (error) {
      return makeErrorResponse(new Error('Error translating text'));
    }
    const newTranslation = await prisma.translation.create({
      data: {
        original: name,
        translated: translatedText,
        classroom: {
          connect: {
            id: classrooomId
          }
        }
      },
    });
    return newTranslation;
  },
};

export default {
  Query,
  Mutation
} as Resolver;