import useGetClassrooms from "@/api/use-get-classrooms";
import AddClassroomModal from "./add-classroom-modal/add-classroom-modal";
import { Heading, VStack } from "@chakra-ui/react";
import ClassroomsTable from "./classrooms-table/classrooms-table";

const dumb = [
  {
    id: "1",
    name: "Classroom 1",
    progress: "50%",
  },
  {
    id: "2",
    name: "Classroom 2",
    progress: "50%",
  },
  {
    id: "3",
    name: "Classroom 3",
    progress: "50%",
  },
]

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

        {Array.isArray(dumb) && (
          <ClassroomsTable classrooms={dumb} />
        )}
      <AddClassroomModal />
    </VStack>
  );
};

export default Home;
