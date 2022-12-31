import React, { useEffect, useState } from 'react';
// import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/button";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/R.jpg";

function Home() {
    return (
        <div class="home">
        <div class="container">
            <div class="row">
                <div class="col">
                    <body>
                        <div class="wrapper">
                            <img src={image}  alt="pic"/>
                        </div>
                    </body>
                    
                </div>
                <div class="col">
                    <Button>
                        press me
                    </Button>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Home;