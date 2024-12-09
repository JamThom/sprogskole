import { Route, Routes } from "react-router-dom";
import Classroom from "@/routes/classroom/classroom";
import Settings from "@/routes/settings/settings";
import NavBar from "./navbar/navbar";
import { VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <VStack>
      <NavBar />
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="/" element={<Classroom />} />
      </Routes>
    </VStack>
  );
};

export default App;
