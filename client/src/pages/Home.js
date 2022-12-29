import React, { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import Typewriter from "typewriter-effect";
import "../css/Home.css";
import { useLocation } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export function ChangeTitle() {
    const location = useLocation();
  
    if (location.hash === "#about") {
      document.title = "Arpan Neupane - About";
    } else if (location.pathname === "/projects") {
      document.title = "Arpan Neupane - Projects";
    } else if (location.pathname === "/contact") {
      document.title = "Arpan Neupane - Contact";
    } else {
      document.title = "Arpan Neupane";
    }
  }

function Home() {

    const [age, setAge] = useState(0)
    const [copyright, setCopyright] = useState('')

    useEffect(() => {
      const miliseconds = new Date() - new Date('11/03/2007')
      setAge(Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 365))

      const year = new Date().getFullYear()
      setCopyright(year)
    }, [])

    return (
      <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                      <img src="../assets/logo.png" alt="" width="30" height="24"/>
                      Cluster-Prism
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </header>
      </div>
    )
};

export default Home;

/*
<div className="intro-header">
          <a href="#home" className="flex">
            <p className="text-first-light">Arpan</p>
            <p className="text-last-light">Neupane</p>
          </a>
          </div>
*/