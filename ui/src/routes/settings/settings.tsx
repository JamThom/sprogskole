import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  VStack,
  HStack,
  IconButton,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import useGetQuestions from "@/api/use-get-questions";
import useAddQuestion from "@/api/use-add-question";

const transformStringToArray = (str: string): [string, string][] => {
  return str.split('\n').map(line => {
    const match = line.match(/Q: \{(.+?)\} A: \{(.+?)\}/);
    if (match) {
      return [match[1], match[2]];
    }
    return ['', ''];
  });
};

const Settings: React.FC = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [bulkInput, setBulkInput] = useState("");

  const addQuestion = useAddQuestion();
  const { questions, loading } = useGetQuestions();
  const removeQuestion = console.log;

  const addBulkQuestions = () => {
    const bulkQuestions = transformStringToArray(bulkInput);
    for (const [question, correctAnswer] of bulkQuestions) {
      addQuestion({
        question,
        correctAnswer
      });
    }
  };

  const handleAddQuestion = () => {
    addQuestion({
      question: newQuestion,
      correctAnswer: newAnswer,
    });
    setNewQuestion("");
  };

  return (
    <Box maxWidth="990px" margin="0 auto" boxShadow="xl" p={4}>
      <Heading mb={4}>Manage Questions</Heading>
      <VStack gap={4} align="stretch">
        <VStack maxH="400px" overflowY="auto" align="stretch">
          {loading ? (
            <Spinner />
          ) : questions?.map((question) => (
            <Flex
              gap="2"
              justify="space-between"
              width="100%"
              _hover={{
                bg: "rgba(255,255,255,0.1)",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
              align="center">
              <Text minWidth="40">{question.original}</Text>
              <Input
              backgroundColor="neutral.900"
               value={question.translated} />
              <IconButton
                color="white"
                aria-label="Remove"
                onClick={() => removeQuestion(question.id)}
              >
                <BsTrash />
              </IconButton>
            </Flex>
          ))}
        </VStack>
        <HStack>
          <Input
            placeholder="Question"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <Input
            placeholder="Answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
          <Button onClick={handleAddQuestion}>Add</Button>
        </HStack>
        <Textarea
          placeholder="Bulk Add (Q: {question} A: {answer})"
          value={bulkInput}
          onChange={(e) => setBulkInput(e.target.value)}
        />
        <Button color="white" onClick={addBulkQuestions}>
          Add Bulk
        </Button>
      </VStack>
    </Box>
  );
};

export default Settings;