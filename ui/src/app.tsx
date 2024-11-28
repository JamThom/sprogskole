import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/routes/home/home";
import Classrooom from "@/routes/classroom/classrooom";
import { TranslationsProvider } from "./translations-context/translations-provider";
import { Provider } from "./components/ui/provider"
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <Provider>
      <Toaster />
      <TranslationsProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classroom/:classroomId/*" element={<Classrooom />} />
          </Routes>
        </Router>
      </TranslationsProvider>
    </Provider>
  );
};

export default App;
