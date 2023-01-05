import React, { useEffect, useState } from 'react';
// import Typewriter from "typewriter-effect";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ApiFetch() {
  const [backendData, setBackendData] = useState([{}]);
  try {
    useEffect(() => {
      fetch("/api/spotify/login").then(response => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      }).then(
        data => {
          setBackendData(data);
        }
      );
    }, []);
    return backendData.content;
  } catch (error) {
    console.log("Error while getting spotify authorization link - " + error);
    return undefined;
  }
  
}

function Home() {

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
            <a href="/connectspotify" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Connect Spotify account</a>
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
  );
};

export default Home;