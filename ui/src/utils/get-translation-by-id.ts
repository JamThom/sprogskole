import useTranslationsContext from "../translations-context/translations-provider";
import { Translation } from "../translations-context/translations-types";

const useGetTranslationById = () => {
  const {
    allTranslations,
  } = useTranslationsContext().state;

  return (id: string): Translation => {
    const translation = allTranslations.find((item) => item.id === id);

    if (!translation) {
      throw new Error(`Translation with id ${id} not found`);
    }

    return translation;
  };

};

export default useGetTranslationById;