import { useQuery } from '@apollo/client';
import { Classroom } from './query-types';
import { GET_CLASSROOMS } from './queries';

const useGetClassrooms = () => {

    const { data, loading, error } = useQuery<{ classrooms: Classroom[] }>(GET_CLASSROOMS);

    return {
        classrooms: data?.classrooms,
        loading,
        error
    };
};

export default useGetClassrooms;