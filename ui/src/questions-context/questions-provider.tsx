import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { QuestionsState } from "./questions-types";
import reducer from "./questions-reducer";
import useAddAnswer from "@/api/use-add-answer";
import useGetAnswers from "@/api/use-get-answers";
import useGetQuestions from "@/api/use-get-questions";
import { Answer, Question } from "@/api/query-types";

type Context = {
  isLoaded: boolean;
  currentQuestion: string;
  answers: Answer[];
  questions: Question[];
  addAnswer: (answer: string) => void;
  removeQuestion: (question: string) => void;
};

const context = createContext<Context | undefined>(undefined);

const initialState: QuestionsState = {
  currentQuestion: "",
};

export const QuestionsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const postAnswer = useAddAnswer();

  const addAnswer = async (answer: string) => {
    const { data } = await postAnswer({
      value: answer,
      questionId: state.currentQuestion,
    });
    dispatch({
      type: "ADD_ANSWER",
      payload: data as Answer,
    });
  };

  const removeQuestion = (question: string) => {
    dispatch({
      type: "REMOVE_QUESTION",
      payload: question,
    });
  }

  const { answers } = useGetAnswers();
  const { questions } = useGetQuestions();

  return (
    <context.Provider
      value={{
        currentQuestion: state.currentQuestion,
        isLoaded: Array.isArray(answers) && Array.isArray(questions),
        answers: (answers??[]) as Answer[],
        questions: (questions??[]) as Question[],
        addAnswer,
        removeQuestion
      }}
    >
      {children}
    </context.Provider>
  );
};

const useQuestionsContext = () => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error(
      "useQuestionsContext must be used within a QuestionsProvider"
    );
  }
  return contextValue as Context;
};

export default useQuestionsContext;
