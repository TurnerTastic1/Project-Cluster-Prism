import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function Login(email, password) {
  if (email === "" || password === "") {
    // alert("Error: Must provide all necessary inputs");
    
    swal( "Oops" ,  "Please provide all necessary inputs!" ,  "error" );
    return null;
  }
  const data = {
    "email": email,
    "password": password
  };
  return axios.post('/api/auth/signin', data).then(
    (response) => {
      if ('token' in response.data) {
        swal("Success", response.data.message, "success", {
          buttons: false,
          timer: 2000,
        });
        return response.data;
      } else {
        swal("Oops", "External server error, please try again", "error");
        return null;
      }
    }
  ).catch(error => {
    if (error.response.status === 400) {
      console.log("Got error: " + error.response.data.error);
      swal ( "Oops" ,  error.response.data.error ,  "error" );
      return null;
    }
  }
  );
}

export default Login;

