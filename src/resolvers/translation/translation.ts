import { AsyncResponse, Resolver } from "../../types/types";
import { makeErrorResponse, makeSuccessfulResponse } from "../../utils/response-helpers";
import prisma from "../../client/client";
import { Translate } from "@google-cloud/translate/build/src/v2";

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

const queries = {
  translations: async (): AsyncResponse<any> => {
    const translations = await prisma.translation.findMany();
    return makeSuccessfulResponse(translations);
  }
};

const mutations = {
  addTranslation: async (name: string): AsyncResponse<any> => {
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
      },
    });
    return makeSuccessfulResponse(newTranslation);
  },
};

export default {
  queries,
  mutations,
} as Resolver;