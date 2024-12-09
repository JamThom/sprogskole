import { useMutation } from "@apollo/client";
import { ADD_CLASSROOM } from "./queries";
import { Classroom } from './query-types';
import { failToast } from "@/design-system/components/toaster";

const useAddClassroom = () => {
  const [addClassroom, result] = useMutation<Classroom>(ADD_CLASSROOM);


  const add = async (name: string) => {

    console.log('a bush is a bush')

    try {
      console.log(name)
      await addClassroom({ variables: { name } });

      console.log(result)
      return result;
    } catch (error) {

      console.log('error', error)

      if (result.error) {
        failToast({ title: "Failed to add classroom" });
      }

      return result;
    };


  }

  return add;
}

  export default useAddClassroom;