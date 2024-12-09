import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { QuestionsState } from "./questions-types";
import reducer from "./questions-reducer";
import useAddAnswer from "@/api/use-add-answer";
import useAddQuestion from "@/api/use-add-question";
import useGetAnswers from "@/api/use-get-answers";
import useGetQuestions from "@/api/use-get-questions";
import { Answer, Question } from "@/api/query-types";

type Context = {
  isLoaded: boolean;
  currentQuestion: string;
  answers: Answer[];
  questions: Question[];
  addAnswer: (answer: string) => void;
  addQuestion: (question: string) => void;
  removeQuestion: (question: string) => void;
};

const context = createContext<Context | undefined>(undefined);

const initialState: QuestionsState = {
  currentQuestion: "",
};

export const QuestionsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const postAnswer = useAddAnswer();
  const postQuestion = useAddQuestion();

  const addAnswer = async (answer: string) => {
    await postAnswer(state.currentQuestion, answer);
    dispatch({
      type: "ADD_ANSWER",
      payload: {
        question: state.currentQuestion,
        answer
      },
    });
  };

  const addQuestion = async (question: string) => {
    await postQuestion(question);
    dispatch({
      type: "ADD_QUESTION",
      payload: question,
    });
  }

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
        addQuestion,
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
