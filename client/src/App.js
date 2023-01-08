import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AccessDenied from "./pages/AccessDenied";
import { Navbar } from "./pages/navbar/nav";
import AccountBox from "./pages/login/accountBox";
import Profile from "./pages/profile/";
import GenCluster from "./pages/GenCluster";


import ConnectSpotify from "./pages/ConnectSpotify";
import Spotify from "./pages/Spotify";

const AppContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #fff;
`;

function App() {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/pagenotfound", element: <PageNotFound/> },
    { path: "/accessdenied", element: <AccessDenied/> },
    { path: "/login", element: <AccountBox />},
    { path: "/profile", element: <Profile />},
    { path: "/gencluster", element: <GenCluster />},
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