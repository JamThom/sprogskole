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

type Context = TranslationsState & {
  addAnswer: (answer: string) => void;
  addTranslation: (translation: string) => void;
  removeTranslation: (translation: string) => void;
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

  useEffect(() => {
    if (allTanslations.data) {
      dispatch({
        type: "SET_ALL_TRANSLATIONS",
        payload: allTanslations.data,
      });
    }
  }, [allTanslations]);

  const addAnswer = (answer: string) => {
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

  const addTranslation = (translation: string) => {
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
        ...state,
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
