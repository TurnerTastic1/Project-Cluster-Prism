import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { SendOAuthCode } from '../../../services/spotify/connectSpotify.service';

const PageContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #111;
`;

const Header1Item = styled.h1`
    height: 10vh;
    padding: 0 1.1em;
    color: #fff;
    font-weight: 500;
    
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
`;

const LinkItem = styled.li`
  height: 10vh;
  padding: 0 1.1em;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  
  transition: all 220ms ease-in-out;

`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #2ecc71
  }
`;

function Spotify() {
  const response = SendOAuthCode(window.location.href); // .content or visit api writeup
  // console.log(response);
  return (
    <PageContainer>
      <Header1Item>
        Spotify connected
      </Header1Item>
      <LinkItem>
        <Link href='/gencluster'> Continue </Link>
      </LinkItem>
    </PageContainer>
  );
};

export default Spotify;