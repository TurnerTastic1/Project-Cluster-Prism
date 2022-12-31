import React from 'react';
import { BrowserRouter as Router, useRoutes, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import HttpsRedirect from "react-https-redirect";

const AppWrapper = () => {
		return (
			<div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
		);
	};

  
export default AppWrapper;
