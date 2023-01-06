import React from 'react';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";



import Home from "./pages/Home";
import { Navbar } from "./pages/navbar/nav";
import Login from "./pages/Login";
import ConnectSpotify from "./pages/ConnectSpotify";
import Spotify from "./pages/Spotify";

import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #fff;
`;

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
    <AppContainer>
      <Router>
        <Navbar/>
        <App/>
      </Router>
    </AppContainer>
    
    
  );
};  
export default appWraper;