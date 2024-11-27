import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./routes/home/home";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;