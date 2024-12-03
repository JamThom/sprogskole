import useGetClassrooms from "@/api/use-get-classrooms";
import AddClassroomModal from "./add-classroom-modal/add-classroom-modal";
import { Heading, HStack, VStack, Spinner, Alert } from "@chakra-ui/react";
import ClassroomsTable from "./classrooms-table/classrooms-table";

const Home = () => {
  const classrooms = useGetClassrooms();

  return (
    <VStack width="xl">
      <HStack width="100%" justifyContent="space-between">
        <Heading>Classrooms</Heading>
        <AddClassroomModal />
      </HStack>
      {classrooms.loading && <Spinner />}
      {classrooms.error && (
        <Alert.Root>
          <Alert.Title>
            {classrooms.error.message}
          </Alert.Title>
        </Alert.Root>
      )}

      {Array.isArray(classrooms.data) && <ClassroomsTable classrooms={classrooms.data} />}
    </VStack>
  );
};

export default Home;
