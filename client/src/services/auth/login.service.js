import axios from 'axios';
import Swal from 'sweetalert2';

function Login(email, password) {
  if (email === "" || password === "") {
    // alert("Error: Must provide all necessary inputs");
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill all input boxes!',
      background: 'black',
    });
    return null;
  }

  
  const data = {
    "email": email,
    "password": password
  };
  return axios.post('/api/auth/signin', data).then(
    (response) => {
      if ('token' in response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: response.data.message,
          background: 'black',
          showConfirmButton: false,
          timer: 2000,
          
        });
        return response.data;
      } else {
        Swal.fire("Oops", "External server error, please try again", "error");
        return null;
      }
    }
  ).catch(error => {
    if (error.response.status === 400) {
      console.log("Got error: " + error.response.data.error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error,
        background: 'black',
      });
      return null;
    }
  }
  );
}

export default Login;