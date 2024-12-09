import useGetClassrooms from "@/api/use-get-classrooms";
import AddClassroomModal from "./add-classroom-modal/add-classroom-modal";
import { Heading, HStack, VStack, Spinner, Alert } from "@chakra-ui/react";
import ClassroomsTable from "./classrooms-table/classrooms-table";

const Home = () => {
  const { classrooms, error, loading } = useGetClassrooms();

  console.log(classrooms);

  return (
    <VStack height="80vh" width="xl">
      <HStack width="100%" justifyContent="space-between">
        <Heading>Classrooms</Heading>
        <AddClassroomModal />
      </HStack>
      {loading && <Spinner m="auto" />}
      {error && (
        <Alert.Root status="error">
          <Alert.Title>{error.message}</Alert.Title>
        </Alert.Root>
      )}

      {Array.isArray(classrooms) &&
        (classrooms?.length === 0 ? (
          <Alert.Root status="info">
            <Alert.Title>No classrooms found</Alert.Title>
          </Alert.Root>
        ) : (
          <ClassroomsTable classrooms={classrooms} />
        ))}
    </VStack>
  );
};

export default Home;
