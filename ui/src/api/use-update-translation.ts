import { useMutation } from "@apollo/client";
import { UPDATE_TRANSLATION } from "./queries";
import { Translation } from './types/queries';

const usePostTranslation = () => {
  const [postTranslation, result] = useMutation<Translation>(UPDATE_TRANSLATION);

  const post = async (name: string) => {
    await postTranslation({
      variables: { name },
    });

    return result;
  };

  return post;
}

export default usePostTranslation;