import { useMutation } from "@apollo/client";
import { ADD_ANSWER } from "./queries";
import { Answer } from './query-types';

const useAddAnswer = () => {
  const [addAnswer, result] = useMutation<Answer>(ADD_ANSWER);

  const add = async ({ questionId, value }:
    { questionId: string, value: string }) => {
    await addAnswer({
      variables: { 
        questionId,
        value,
       },
    });

    return result;
  };

  return add;
}

export default useAddAnswer;