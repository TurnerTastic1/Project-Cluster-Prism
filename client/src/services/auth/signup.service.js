import axios from 'axios';
import Swal from 'sweetalert2';

function Signup(data) {
  return axios.post('/api/auth/signup', data).then(
    (response) => {
      return response.data;
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
};


export default Signup;