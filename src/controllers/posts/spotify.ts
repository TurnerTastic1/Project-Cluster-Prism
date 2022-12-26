
import { Request, Response } from 'express';
import config from '../../config/APIconfig';

const clientId = config.spotify.clientId;
const clientSecret = config.spotify.clientSecret;
const redirectUri = 'http://localhost:3000/callback/';
const authorizationCode = 'your-authorization-code';

async function getAccessToken(): Promise<string> {
  const authOptions = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Authorization' : 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    body: 'grant_type=client_credentials'
  });

  try {
    const response = await (authOptions.json());
    return response.access_token;
  } catch (error) {
    console.error(error);
    return '';
  }
}


const spotifyController = async (req: Request, res: Response) => {

    try {
        const token = getAccessToken();
        console.log(token);
        res.status(200).send('token aquired');
      } catch (error) {
        res.status(400).send('Error - ' + error);
      }
//   const clientId = config.spotify.clientId;
//   const clientSecret = config.spotify.clientSecret;

//   const _getToken = async () => {

//     const result = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type' : 'application/x-www-form-urlencoded', 
//         'Authorization' : 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
//       },
//       body: 'grant_type=client_credentials'
//     });

//     const data = await result.json();
//     return data.access_token;
//   };
  
  
};

export default {spotifyController};