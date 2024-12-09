import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/routes/home/home";
import Classrooom from "@/routes/classroom/classrooom";
import { Provider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster";
import ApiProvider from "./api/api-provider";

const App = () => {
  return (
    <ApiProvider>
      <Provider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classroom/:classroomId/*" element={<Classrooom />} />
          </Routes>
        </Router>
      </Provider>
    </ApiProvider>
  );
};

export default App;
