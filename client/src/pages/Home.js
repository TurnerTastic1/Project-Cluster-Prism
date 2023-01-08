import React, { useEffect, useState } from 'react';


import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

import logo from '../assets/temp_one.png';


//import { Typewriter } from 'react-simple-typewriter'; // https://www.npmjs.com/package/react-simple-typewriter
import  Typewriter  from 'typewriter-effect';
const HomeContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #111;
  padding: 100px;
`;

const TypewriterContainer = styled.div`
  height: 300px;
  color: #fff;
  font-weight: 300;
  font-size: 90px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 300px;
  height: 300px;
  
  

  img {
    
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;



function Home() {

  const handleImgClick = event => {
    setTimeout(function(){
      window.location.href = "/pagenotfound";
    },1000);
  };

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
              <LogoWrapper>
                <LogoImg>
                  <img src={logo} onClick={handleImgClick} alt="logo" />
                </LogoImg>
              </LogoWrapper>
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