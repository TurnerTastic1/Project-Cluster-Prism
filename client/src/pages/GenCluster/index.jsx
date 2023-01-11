import React from "react";
import styled from "styled-components";
import AppBar from "./AppBar";
import { SendOAuthCode } from '../../services/spotify/connectSpotify.service';
import {useWindowDimensions} from 'react-native';

const ProfileContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #111;
  
  align-items: center;
`;

function GenCluster() {
  const {height, width} = useWindowDimensions();
  if (localStorage.getItem('user') === null) {
    window.location.href = "/accessdenied";
    return null;
  };


  let code = null;
  const url = new URL(window.location.href);
  const urlParams = new URLSearchParams(url.search);
  code = urlParams.getAll('code');

  if (code.length > 0) {
    const response = SendOAuthCode(window.location.href); // .content or visit api writeup
  }

  const size = (width >= 850);
  // console.log(localStorage.getItem("spotifyConnected"));
  return(
    
    <ProfileContainer>
      { size && <AppBar/> }
    </ProfileContainer>
  );
}

export default GenCluster;