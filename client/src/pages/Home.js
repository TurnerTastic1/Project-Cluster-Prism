import React, { useEffect, useState } from 'react';

import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

//import { Typewriter } from 'react-simple-typewriter'; // https://www.npmjs.com/package/react-simple-typewriter
import  Typewriter  from 'typewriter-effect';
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
              onInit={(typewriter) => {
                typewriter.typeString('Welcome to Project Cluster-Prism')
                  .pauseFor(700)
                  .changeDeleteSpeed(-1000)
                  .deleteAll()
                  .typeString('Generate AI art')
                  .pauseFor(500)
                  .changeDeleteSpeed(70)
                  .deleteChars(3)
                  .typeString('stories')
                  .pauseFor(500)
                  .deleteChars(7)
                  .typeString('and more')
                  .pauseFor(500)
                  .changeDeleteSpeed(-1000)
                  .deleteAll()
                  .typeString('All from your Spotify data')
                  .start();
              }}
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


// <Typewriter
//               words={['Welcome to Project Cluster-Prism', 'Generate AI images from Spotify data']}
//               cursor
//               cursorStyle='_'
//               typeSpeed={70}
//               deleteSpeed={90}
//               delaySpeed={1500}
//             />