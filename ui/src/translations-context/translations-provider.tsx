import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { TranslationsState } from "./translations-types";
import reducer from "./translations-reducer";
import useGetTranslations from "../api/use-get-translations";
import useAddAnswer from "@/api/use-add-answer";
import useAddTranslation from "@/api/use-add-translation";

type Context = {
  addAnswer: (answer: string) => void;
  addTranslation: (translation: string) => void;
  removeTranslation: (translation: string) => void;
  state: TranslationsState;
};

const context = createContext<Context | undefined>(undefined);

const initialState: TranslationsState = {
  allTranslations: [],
  currentTranslation: "",
  possibleTranslations: [],
  remainingTranslations: [],
  currentLevel: 0,
  answers: [],
  translationsLoaded: false,
};

export const TranslationsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allTanslations = useGetTranslations();
  const allAnswers = useGetTranslations();
  const postAnswer = useAddAnswer();
  const postTranslation = useAddTranslation();

  useEffect(() => {
    if (allTanslations.data) {
      dispatch({
        type: "SET_ALL_TRANSLATIONS",
        payload: allTanslations.data,
      });
    }
  }, [allTanslations]);

  useEffect(() => {
    if (allAnswers.data) {
      dispatch({
        type: "SET_ANSWERS",
        payload: allAnswers.data,
      });
    }
  }, [allAnswers]);

  const addAnswer = async (answer: string) => {
    await postAnswer(state.currentTranslation, answer);
    dispatch({
      type: "ADD_ANSWER",
      payload: {
        translation: state.currentTranslation,
        answer,
        level: 1,
      },
    });

    if (state.remainingTranslations.length === 0) {
      dispatch({
        type: "INCREMENT_LEVEL",
      });
    }
  };

  const addTranslation = async (translation: string) => {
    await postTranslation(translation);
    dispatch({
      type: "ADD_TRANSLATION",
      payload: translation,
    });
  }

  const removeTranslation = (translation: string) => {
    dispatch({
      type: "REMOVE_TRANSLATION",
      payload: translation,
    });
  }

  return (
    <context.Provider
      value={{
        state,
        addAnswer,
        addTranslation,
        removeTranslation
      }}
    >
      {children}
    </context.Provider>
  );
};

const useTranslationsContext = () => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error(
      "useTranslationsContext must be used within a TranslationsProvider"
    );
  }
  return contextValue as Context;
};

export default useTranslationsContext;
