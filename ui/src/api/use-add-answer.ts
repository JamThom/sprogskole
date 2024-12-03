import { useMutation } from "@apollo/client";
import { ADD_ANSWER } from "./queries";
import { Answer } from './types/queries';

const useAddAnswer = () => {
  const [addAnswer, result] = useMutation<Answer>(ADD_ANSWER);

  const add = async (translationId: string, value: string) => {
    await addAnswer({
      variables: { 
        translationId,
        value,
       },
    });

    return result;
  };

  return add;
}

export default useAddAnswer;