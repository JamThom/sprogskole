import getRandomItem from "../utils/get-random-item";
import { TranslationsAction, TranslationsState } from "./translations-types";

const generatePossibleTranslations = (allTranslations: TranslationsState['allTranslations'], currentTranslation: string) => {
  const possibleTranslations: string[] = [];
  while (possibleTranslations.length < 9) {
    const item = getRandomItem(allTranslations).id;
    if (item !== currentTranslation && !possibleTranslations.includes(item)) {
      possibleTranslations.push(item);
    }
  };
  possibleTranslations[Math.floor(Math.random() * 9)] = currentTranslation;
  return possibleTranslations;
};

const reducer = (state: TranslationsState, action: TranslationsAction): TranslationsState => {
  let currentTranslation;
  switch (action.type) {
    case 'ADD_TRANSLATION':
      return {
        ...state,
        allTranslations: [
          ...state.allTranslations,
          {
            id: action.payload,
            original: action.payload,
            translated: action.payload,
          },
        ],
      };
    case 'REMOVE_TRANSLATION':
      return {
        ...state,
        allTranslations: state.allTranslations.filter(
          (translation) => translation.id !== action.payload
        ),
      };
          
    case 'SET_ALL_TRANSLATIONS':
      currentTranslation = getRandomItem(action.payload).id;
      return {
        ...state,
        allTranslations: action.payload,
        currentTranslation,
        possibleTranslations: generatePossibleTranslations(
          action.payload,
          currentTranslation
        ),
        translationsLoaded: true
      };
    case 'INCREMENT_LEVEL':
      return {
        ...state,
      };
    case 'ADD_ANSWER':
      currentTranslation = getRandomItem(state.allTranslations).id;
      return {
        ...state,
        answers: [...state.answers, action.payload],
        currentTranslation,
        remainingTranslations: action.payload.answer === action.payload.translation ?
          state.remainingTranslations.filter((id) => id !== action.payload.translation) :
          state.remainingTranslations,
        possibleTranslations: generatePossibleTranslations(state.allTranslations, currentTranslation),
      };
    default:
      return state;
  }
}

export default reducer;