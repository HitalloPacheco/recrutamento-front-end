import React from "react";
import Dashboard from "./pages/Dashboard";
import Provider from '../src/contexts/search'
//import Login from "./pages/Login";
//import Register from "./pages/Register";
//import Auth from "./pages/Register/Auth";
import AuthorizedRegistration from "./pages/Register/Auth/AuthorizedRegistration";

const App = () => {
  return (
    <Provider>
      {true ? <AuthorizedRegistration /> : <Dashboard />}
    </Provider>
  );
};

export default App;
