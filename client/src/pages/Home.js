import React, { useEffect, useState } from 'react';

import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

import { Typewriter } from 'react-simple-typewriter'; // https://www.npmjs.com/package/react-simple-typewriter

const HomeContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #111;
`;

const TypewriterContainer = styled.div`
  height: 300px;
  color: #fff;
  font-weight: 300;
  font-size: 90px;
  
`;



function Home() {

  return (
    <HomeContainer>
      <div className="container">
        <div className="row">
          <TypewriterContainer>
            <Typewriter
              words={['Welcome to Project Cluster-Prism', 'Generate AI images from Spotify data']}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={90}
              delaySpeed={1500}
            />
          </TypewriterContainer>
        </div>
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
      </div>
    </HomeContainer>
  );
};

export default Home;