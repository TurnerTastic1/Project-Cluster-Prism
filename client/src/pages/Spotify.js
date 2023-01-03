import React, { useEffect, useState } from 'react';

function GetOAuthCode() {
  let code = null;
  try {
    const url = new URL(window.location.href);
    const urlParams = new URLSearchParams(url.search);
    code = urlParams.getAll('code');
  } catch(error) {
    console.log(error);
    return code;
  }
  return code;
}

function SendOAuthCode() {
  const [backendData, setBackendData] = useState([{}]);
  const code = GetOAuthCode();
  useEffect(() => {
    fetch("/api/spotify/recieveCode", {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(code)
    }).then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    );
  }, [code]);

  return backendData.content;
  
}

// eslint-disable-next-line no-unused-vars
function getTop10() {
  return null;
}

function Spotify() {

  return (
    <div>
      {window.location.href}
      <p>
                testing baby
      </p>
      {SendOAuthCode()}
    </div>
  );
};

export default Spotify;