import { Heading, Stack } from "@chakra-ui/react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import useTranslationsContext from "@/questions-context/questions-provider";

const Stats = () => {
  const {
    answers,
  } = useTranslationsContext();

  const correctAnswers = answers.filter(({ question, answer }) => {
    return question === answer;
  }).length;

  const percentCorrect =
    answers.length === 0 ? 100 : (correctAnswers / answers.length) * 100;

  return (
    <Stack alignItems="center">
      <ProgressCircleRoot value={percentCorrect}>
        <ProgressCircleRing />
      </ProgressCircleRoot>
      <Heading mb={8}>
        Score: {correctAnswers} / {answers.length}
      </Heading>
    </Stack>
  );
};

export default Stats;
