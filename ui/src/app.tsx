import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesignSystemProvider from "./design-system/provider";
import Home from "./routes/home/home";

const App = () => {
  return (
    <DesignSystemProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </DesignSystemProvider>
  );
};

export default App;