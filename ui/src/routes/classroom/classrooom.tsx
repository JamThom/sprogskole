import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Classroom from "@/routes/classroom/classroom";
import Settings from "@/routes/settings/settings";
import NavBar from "./navbar/navbar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="/" element={<Classroom />} />
      </Routes>
    </>
  );
};

export default App;
