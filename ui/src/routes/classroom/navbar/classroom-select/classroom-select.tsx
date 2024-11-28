import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";

const classrooms = [
  {
    id: "abc",
    name: "Classroom 1",
  },
  {
    id: "def",
    name: "Classroom 2",
  },
];

const ClassroomSelect: React.FC = () => {
  const { classroomId } = useParams<{ classroomId: string }>();
  const navigate = useNavigate();

  const goToClassroom = (classroomId: string) => {
    navigate(`/classroom/${classroomId}`);
  };

  const currentClassroom = classrooms.find((c) => c.id === classroomId);

  return (
    <Box>
      <MenuRoot onSelect={({ value }) => {
        goToClassroom(value);
      }}>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {currentClassroom?.name || "Select Classroom"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="new-txt">New Text File</MenuItem>
          <MenuItem value="new-file">New File...</MenuItem>
          <MenuItem value="new-win">New Window</MenuItem>
          <MenuItem value="open-file">Open File...</MenuItem>
          <MenuItem value="export">Export</MenuItem>
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default ClassroomSelect;
