import React from 'react';
import { BrowserRouter as Router, useRoutes, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import HttpsRedirect from "react-https-redirect";

function App() {
		let routes = useRoutes([
				{ path: "/", element: <Home /> },
				{ path: "/login", element: <Login /> },
        { path: "/", element: <Navbar /> }
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
