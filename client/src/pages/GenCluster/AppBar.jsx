import React from "react";
import styled from "styled-components";
import ConnectButton from "../spotify/connect/connectButton";
import Swal from "sweetalert2";

const AppBarWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  background: #222;
`;

const Welcome = styled.p`
  color: #fff;
  padding-top: 10px;
  padding-left: 10px;
  color: rgb(118, 111, 232);
  display: flex;
  font-weight: 500;
  font-size: 25px;
`;

const SpotifyStatus = styled.p`
    color: #fff;
    padding-top: 10px;
    padding-left: 300px;
    color: rgb(118, 111, 232);
    display: flex;
    font-weight: 500;
    font-size: 25px;
`;

function AppBar() {

  const user = JSON.parse(localStorage.getItem('user'));
  let spotifyConnected = "Not connected";
  if (localStorage.getItem("spotifyConnected") === "true") {
    spotifyConnected = "Connected";
  };
//   console.log((localStorage.getItem("spotifyConnected")));
//   console.log(Boolean(localStorage.getItem("spotifyConnected")));
  
  return(
    <AppBarWrapper>
      <Welcome>
            Hello {user.firstname}
      </Welcome>
      <SpotifyStatus>
          Spotify: {spotifyConnected}
      </SpotifyStatus>
      { !(spotifyConnected === "Connected") && <ConnectButton/>}
    </AppBarWrapper>
  );
}

export default AppBar;