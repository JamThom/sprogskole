import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";
import useGetClassrooms from "@/api/use-get-classrooms";

const ClassroomSelect: React.FC = () => {
  const { classroomId } = useParams<{ classroomId: string }>();
  const navigate = useNavigate();

  const goToClassroom = (classroomId: string) => {
    navigate(`/classroom/${classroomId}`);
  };

  const { classrooms, loading } = useGetClassrooms();

  const currentClassroom = useMemo(() => {
    if (Array.isArray(classrooms)) {
      return classrooms.find((classroom) => classroom.id === classroomId);
    }
    return null;
  }, [classrooms, classroomId]);

  return (
    <Box>
      <MenuRoot onSelect={({ value }) => {
        goToClassroom(value);
      }}>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {currentClassroom?.name || "..."}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {loading ? (
            <MenuItem value="loading">
              Loading...
            </MenuItem>
          ) : Array.isArray(classrooms) ? (
            classrooms.map((classroom) => (
              <MenuItem key={classroom.id} value={classroom.id}>
                {classroom.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="no-classrooms">
              No classrooms found
            </MenuItem>
          )}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default ClassroomSelect;
