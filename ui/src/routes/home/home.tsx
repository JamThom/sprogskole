import useGetClassrooms from "@/api/use-get-classrooms";
import AddClassroomModal from "./add-classroom-modal/add-classroom-modal";
import { Heading, VStack } from "@chakra-ui/react";
import ClassroomsTable from "./classrooms-table/classrooms-table";

const Home = () => {
  const classrooms = useGetClassrooms();

  return (
    <VStack>
      <Heading>Classrooms</Heading>
      {classrooms.loading && <p>Loading...</p>}
      {classrooms.error && (
        <div>
          <h2>Error fetching classrooms</h2>
        </div>
      )}

        {Array.isArray(classrooms.data) && (
          <ClassroomsTable classrooms={classrooms.data} />
        )}
      <AddClassroomModal />
    </VStack>
  );
};

export default Home;
