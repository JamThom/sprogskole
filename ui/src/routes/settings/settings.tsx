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
  List,
  Text,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import useTranslationsContext from "@/translations-context/translations-provider";

const Settings: React.FC = () => {
  const [newTerm, setNewTerm] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [bulkInput, setBulkInput] = useState("");

  const { allTranslations, addTranslation, removeTranslation } =
    useTranslationsContext();

  const addBulkTranslations = () => {
    const bulkTranslations = bulkInput.split("\n").map((line) => {
      const translation = line.split(" ")[0];
      return translation.replace(/[\r\n]+/gm, "");
    });
    for (const translation of bulkTranslations) {
      addTranslation(translation);
    }
  };

  const handleAddTranslation = () => {
    addTranslation(newTerm);
    setNewTerm("");
    setNewTranslation("");
  };

  return (
    <Box maxWidth="990px" margin="0 auto" boxShadow="xl" p={4}>
      <Heading mb={4}>Manage Translations</Heading>
      <VStack gap={4} align="stretch">
        <VStack maxH="400px" overflowY="auto" align="stretch">
          {allTranslations.map((translation) => (
            <Flex
              gap="2"
              justify="space-between"
              width="100%"
              _hover={{
                bg: "rgba(255,255,255,0.1)",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
              align="center">
              <Text minWidth="40">{translation.original}</Text>
              <Input
              backgroundColor="neutral.900"
               value={translation.translated} />
              <IconButton
                color="white"
                aria-label="Remove"
                onClick={() => removeTranslation(translation.id)}
              >
                <BsTrash />
              </IconButton>
            </Flex>
          ))}
        </VStack>
        <HStack>
          <Input
            placeholder="New Term"
            value={newTerm}
            onChange={(e) => setNewTerm(e.target.value)}
          />
          <Button onClick={handleAddTranslation}>Add</Button>
        </HStack>
        <Textarea
          placeholder="Bulk Add (term,translation per line)"
          value={bulkInput}
          onChange={(e) => setBulkInput(e.target.value)}
        />
        <Button color="white" onClick={addBulkTranslations}>
          Add Bulk
        </Button>
      </VStack>
    </Box>
  );
};

export default Settings;
