import { useQuery } from '@apollo/client';
import { Classroom } from './types/queries';
import { GET_CLASSROOMS } from './queries';

const useGetClassrooms = () => {

    const { data, loading, error } = useQuery<Classroom[]>(GET_CLASSROOMS);

    console.log({
        data,
        error
    });
    return { data, loading, error };
};

export default useGetClassrooms;