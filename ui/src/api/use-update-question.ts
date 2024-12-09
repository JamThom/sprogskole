import { useMutation } from "@apollo/client";
import { UPDATE_QUESTION } from "./queries";
import { Question } from './query-types';

const usePostQuestion = () => {
  const [postQuestion, result] = useMutation<Question>(UPDATE_QUESTION);

  const post = async (name: string) => {
    await postQuestion({
      variables: { name },
    });

    return result;
  };

  return post;
}

export default usePostQuestion;