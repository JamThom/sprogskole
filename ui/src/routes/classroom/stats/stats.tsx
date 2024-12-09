import { Heading, Stack } from "@chakra-ui/react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import useQuestionsContext from "@/questions-context/questions-provider";

const Stats = () => {
  const {
    answers,
  } = useQuestionsContext();

  const correctAnswers = answers.filter(({ isCorrect }) => {
    return isCorrect;
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
