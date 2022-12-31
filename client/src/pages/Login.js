import React, { useEffect, useState } from 'react';

function Home() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/spotify/login").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    );
  }, []);

  return (
    <div>
      {(typeof backendData === 'undefined') ? (
        <p>Loading...</p>
      ): (
        <p>{backendData.content}</p>
      )}
    </div>
  );
};

export default Home;