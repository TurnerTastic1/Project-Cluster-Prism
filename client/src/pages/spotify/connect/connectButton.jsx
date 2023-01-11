import React from "react";
import styled from "styled-components";
import { connectspotify } from '../../../services/spotify/connectSpotify.service';

const ButtonWrapper = styled.div`
  background: inherit;
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
`;

const ButtonItem = styled.button`
  width: 100wh;
  height: 40px;
 
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(118, 111, 232);
  

  &:hover {
    color: #2ecc71;
    background: #111;
  }
`;

function ConnectButton() {
  if (localStorage.getItem('user') === null) {
    window.location.href = "/accessdenied";
    return null;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // Calling api to get URL
    const response = await connectspotify();
    // Retrieving URL
    const url = response.data.url;
    // Setting user to login URL
    window.location.href = url;
    return null;
  };

  const boo = true;
  const user = JSON.parse(localStorage.getItem('user'));
  const spotifyConnected = (localStorage.getItem("spotifyConnected") === "true");
  
  return(
    <ButtonWrapper>
      { boo && 
      <ButtonItem onClick={handleSubmit}>
        Connect spotify
      </ButtonItem>
      }
    </ButtonWrapper>
  );
}

export default ConnectButton;