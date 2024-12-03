import { useQuery } from '@apollo/client';
import { Translation } from './types/queries';
import { GET_TRANSLATIONS } from './queries';

const useGetTranslations = () => {

    const { data, loading, error } = useQuery<Translation[]>(GET_TRANSLATIONS);

    return { data, loading, error };
};

export default useGetTranslations;