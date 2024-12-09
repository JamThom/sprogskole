import { useMutation } from "@apollo/client";
import { ADD_QUESTION } from "./queries";
import { Question } from './query-types';
import { useParams } from "react-router-dom";

const useAddQuestion = () => {
  const [addQuestion, result] = useMutation<Question>(ADD_QUESTION);

  const { classroomId } = useParams<{ classroomId: string }>();

  const add = async ({
    question,
    correctAnswer
  }: {
    question: string;
    correctAnswer: string;
  }) => {
    await addQuestion({
      variables: { question, correctAnswer, classroomId },
    });

    return result;
  };

  return add;
}

export default useAddQuestion;