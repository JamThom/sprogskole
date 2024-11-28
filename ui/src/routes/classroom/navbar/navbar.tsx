import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ClassroomSelect from "./classroom-select/classroom-select";

const Navbar: React.FC = () => {
  const { classroomId } = useParams<{ classroomId: string }>();

  return (
    <Box px={4}>
      <Flex h={16} gap="8" alignItems="center">
        <ClassroomSelect />
        <Link to={`/classroom/${classroomId}`}>Classroom</Link>
        <Link to={`/classroom/${classroomId}/settings`}>Settings</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
