import React from 'react';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> }
      ]);
      return routes;
};

const AppWrapper = () => {
    return (
      <Router>
        <App />
      </Router>
    );
  };

export default AppWrapper;