import React, { useEffect, useState } from "react";

function SigninController(email, password) {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/auth/signin", {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:{
        "email": email,
        "password": password
      }
    }).then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    );
  }, [email, password]);
  console.log(backendData.content);
};

export default SigninController;