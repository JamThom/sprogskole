import { Grid, Heading, Flex } from "@chakra-ui/react";
import useTranslationsContext from "../../translations-context/translations-provider";
import useGetTranslationById from "../../utils/get-translation-by-id";
import WordButton from "./word-button/word-button";
import Stats from "./stats/stats";

const Classroom = () => {
  const { currentTranslation, possibleTranslations, translationsLoaded } =
    useTranslationsContext().state;

  const getTranslationById = useGetTranslationById();

  return translationsLoaded ? (
    <>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <Stats />
        <Heading mb={8}>
          {getTranslationById(currentTranslation).original}
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {possibleTranslations.map((item) => (
            <WordButton translationId={item} key={item} />
          ))}
        </Grid>
      </Flex>
    </>
  ) : (
    <Heading>Loading...</Heading>
  );
};

export default Classroom;
