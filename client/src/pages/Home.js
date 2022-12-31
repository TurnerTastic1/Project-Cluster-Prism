import React, { useEffect, useState } from 'react';
// import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/button";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/R.jpg";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api/spotify/login").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, []);

    const routeChange = () =>{ 
        let path = backendData.content; 
        navigate(path);
      }

    return (
        <div className="home">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>
                        <div className="spotify-logo"></div>
                    </div>
                </div>
                <div className="col">
                    <a href={(backendData.content)} className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Connect Spotify account</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        {window.location.href}
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Home;