import { Button } from "@chakra-ui/react";
import useQuestionsContext from "../../../questions-context/questions-provider";
import useGetQuestionById from "../../../utils/get-question-by-id";
import { motion } from "framer-motion";
import { toaster } from "@/components/ui/toaster";

const MotionButton = motion(Button);

type WordButtonProps = {
  questionId: string;
};

const WordButton = ({ questionId }: WordButtonProps) => {
  const {
    currentQuestion,
    addAnswer,
  } = useQuestionsContext();

  const getQuestionById = useGetQuestionById();

  const handleAnswerClick = () => {
    if (questionId === currentQuestion) {
      toaster.success({
        title: "Correct!",
      });
    } else {
      toaster.create({
        title: "Incorrect",
        description: `Correct answer is: ${
          getQuestionById(currentQuestion).translated
        }`,
      });
    }
    addAnswer(questionId);
  };

  return (
    <MotionButton
      color="white"
      key={getQuestionById(questionId).translated}
      onClick={handleAnswerClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {getQuestionById(questionId).translated}
    </MotionButton>
  );
};

export default WordButton;
