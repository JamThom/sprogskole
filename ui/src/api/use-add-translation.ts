import { useMutation } from "@apollo/client";
import { ADD_TRANSLATION } from "./queries";
import { Translation } from './types/queries';

const useAddTranslation = () => {
  const [addTranslation, result] = useMutation<Translation>(ADD_TRANSLATION);

  const add = async (name: string) => {
    await addTranslation({
      variables: { name },
    });

    return result;
  };

  return add;
}

export default useAddTranslation;