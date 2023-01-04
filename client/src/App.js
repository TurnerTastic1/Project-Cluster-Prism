import React from 'react';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";



import Home from "./pages/Home";
import { Navbar } from "./pages/navbar/nav";
import Login from "./pages/Login";
import ConnectSpotify from "./pages/ConnectSpotify";
import Spotify from "./pages/Spotify";


function App() {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login />},
    { path: "/connectspotify", element: <ConnectSpotify /> },
    { path: "/callback", element: <Spotify />}
  ]);
  return routes;

		
};

const appWraper = () => {
  return (
    <Router>
        <Navbar/>
        <App/>
    </Router>
    
    
  );
};  
export default appWraper;