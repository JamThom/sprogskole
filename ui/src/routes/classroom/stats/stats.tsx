import { Heading, Stack } from "@chakra-ui/react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import useTranslationsContext from "@/translations-context/translations-provider";

const Stats = () => {
  const {
    answers,
    currentLevel,
  } = useTranslationsContext().state;

  const correctAnswers = answers.filter(({ translation, answer }) => {
    return translation === answer;
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
      Level: {currentLevel + 1}
    </Stack>
  );
};

export default Stats;
