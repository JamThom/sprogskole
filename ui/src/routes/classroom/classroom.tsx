import { Grid, Heading, Spinner, Alert } from "@chakra-ui/react";
import useQuestionsContext, { QuestionsProvider } from "../../questions-context/questions-provider";
import useGetQuestionById from "../../utils/get-question-by-id";
import WordButton from "./word-button/word-button";
import Stats from "./stats/stats";
import { useMemo } from "react";

const Classroom = () => {
  const { currentQuestion, questions, isLoaded } = useQuestionsContext();

  const getQuestionById = useGetQuestionById();

  const possibleAnswers = useMemo(() => {
    const currentQuestionObj = getQuestionById(currentQuestion);
    const possibleAnswers = new Set([currentQuestionObj]);
    while (possibleAnswers.size < 9) {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)].id;
      possibleAnswers.add(
        getQuestionById(randomQuestion)
      );
    }
    return Array.from(possibleAnswers);
  }, [currentQuestion, questions]);

  return isLoaded ? Array.isArray(questions) && questions?.length > 0 ? (
    <>
      <Stats />
      <Heading mb={8}>
        {getQuestionById(currentQuestion).original}
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {possibleAnswers.map((item) => (
          <WordButton questionId={item.id} key={item.id} />
        ))}
      </Grid>
    </>
  ) : (
    <Alert.Root status="info">
      <Alert.Title>No questions fond</Alert.Title>
    </Alert.Root>
  ) : (
    <Spinner />
  );
};

export default () => (
  <QuestionsProvider>
    <Classroom />
  </QuestionsProvider>
);
