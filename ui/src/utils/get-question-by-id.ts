import { Question } from "@/api/query-types";
import useGetQuestions from "@/api/use-get-questions";

const useGetQuestionById = () => {
  
  const { questions } = useGetQuestions();

  return (id: string): Question => {
    const question = questions?.find((item) => item.id === id);

    if (!question) {
      throw new Error(`Question with id ${id} not found`);
    }

    return question;
  };

};

export default useGetQuestionById;