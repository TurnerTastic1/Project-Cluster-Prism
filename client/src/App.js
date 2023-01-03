import React from 'react';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Spotify from "./pages/Spotify";

import "./App.css";
import styled from "styled-components";
import { AccountBox } from './pages/accountBox';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/callback", element: <Spotify />}
  ]);
  return routes;

		
};

const appWraper = () => {
  return (
    <AppContainer>
      <AccountBox/>
    </AppContainer>
  );
};  
export default appWraper;


/*


<Router>
      <Navbar/>
      <App />
    </Router>
*/
