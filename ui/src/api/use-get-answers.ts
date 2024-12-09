import { useQuery } from '@apollo/client';
import { Answer } from './query-types';
import { GET_ANSWERS } from './queries';

const useGetAnswers = () => {

    const { data, loading, error } = useQuery<{ answers: Answer[] }>(GET_ANSWERS);

    return {
        answers: data?.answers,
        loading,
        error
    };
};

export default useGetAnswers;