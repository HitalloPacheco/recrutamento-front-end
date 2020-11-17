import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "../src/contexts/search";
import Routes from "./pages/routes";

const App = () => {
  return (
    <Router>
      <Provider>
        <Routes />
      </Provider>
    </Router>
  );
};

export default App;
