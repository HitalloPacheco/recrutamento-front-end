import React from "react";
import Dashboard from "./pages/Dashboard";
import Provider from '../src/contexts/search'

const App = () => {
  return (
    <Provider>
      <Dashboard />
    </Provider>
  );
};

export default App;
