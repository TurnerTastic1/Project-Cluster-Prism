import axios from 'axios';
// Axios returns data object then standard api object

function connectspotify() {
  return  axios.get("/api/spotify/login").then(
    (response) => {
      return response;
    }
  ).catch(error => {
    if (error.response.status === 400) {
      console.log("Got error while getting spotify login url from server: " + error);
      return null;
    }
  }
  );
}

// Params: current URL
function GetOAuthCode(windowLocation) {
  let code = null;
  try {
    const url = new URL(windowLocation);
    const urlParams = new URLSearchParams(url.search);
    code = urlParams.getAll('code');
  } catch(error) {
    console.log(error);
    return code;
  }
  return code.toString();
}

// Params: current URL
function SendOAuthCode(windowLocation) {
  const code = GetOAuthCode(windowLocation);
  const user = JSON.parse(localStorage.getItem('user'));
  const data = {
    "spotify_auth": code,
    "email": user.email
  };
  
  return axios.post('/api/spotify/recieveCode', data).then(
    (response) => {
      // Updating local spotify connection boolean
      localStorage.setItem('spotifyConnected', "true");
      return response.data;
    }
  ).catch(error => {
    if (error.response.status === 400) {
      console.log("Got error while sending spotify code to server: " + error.response.data.error);
      return null;
    }
  }
  );
}



export {connectspotify, GetOAuthCode, SendOAuthCode};