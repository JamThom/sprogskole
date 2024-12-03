import { Button } from "@chakra-ui/react";
import useTranslationsContext from "../../../translations-context/translations-provider";
import useGetTranslationById from "../../../utils/get-translation-by-id";
import { motion } from "framer-motion";
import { toaster } from "@/components/ui/toaster";

const MotionButton = motion(Button);

type WordButtonProps = {
  translationId: string;
};

const WordButton = ({ translationId }: WordButtonProps) => {
  const {
    state: { currentTranslation },
    addAnswer,
  } = useTranslationsContext();

  const getTranslationById = useGetTranslationById();

  const handleAnswerClick = () => {
    if (translationId === currentTranslation) {
      toaster.success({
        title: "Correct!",
      });
    } else {
      toaster.create({
        title: "Incorrect",
        description: `Correct answer is: ${
          getTranslationById(currentTranslation).translated
        }`,
      });
    }
    addAnswer(translationId);
  };

  return (
    <MotionButton
      color="white"
      key={getTranslationById(translationId).translated}
      onClick={handleAnswerClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {getTranslationById(translationId).translated}
    </MotionButton>
  );
};

export default WordButton;
