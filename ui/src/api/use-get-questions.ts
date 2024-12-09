import { useQuery } from '@apollo/client';
import { Question } from './query-types';
import { GET_QUESTIONS } from './queries';

const useGetQuestions = () => {

    const { data, loading, error } = useQuery<{ questions: Question[] }>(GET_QUESTIONS);

    return { questions: data?.questions, loading, error };
};

export default useGetQuestions;