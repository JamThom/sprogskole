import { useMutation } from "@apollo/client";
import { ADD_CLASSROOM } from "./queries";
import { Classroom } from './types/queries';

const useAddClassroom = () => {
  const [addClassroom, result] = useMutation<Classroom>(ADD_CLASSROOM);

  const add = async (name: string) => {
    await addClassroom({
      variables: { name },
    });

    return result;
  };

  return add;
}

export default useAddClassroom;