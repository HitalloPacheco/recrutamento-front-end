import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "../src/contexts/search";
import Routes from "./pages/routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Provider>
        <Routes />
        <ToastContainer />
      </Provider>
    </Router>
  );
};

export default App;
