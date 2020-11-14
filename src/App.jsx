import React from "react";
import Dashboard from "./pages/Dashboard";
import Provider from '../src/contexts/search'
import Login from "./pages/Login";

const App = () => {
  return (
    <Provider>
      <Login />
      <Dashboard />
    </Provider>
  );
};

export default App;
