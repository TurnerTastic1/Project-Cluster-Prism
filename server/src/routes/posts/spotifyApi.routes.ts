import express from 'express';
import controller from '../../controllers/posts/spotify';
import config from '../../config/APIconfig';
import querystring from 'querystring';
import str from '@supercharge/strings';
import 'dotenv/config';

import User from '../../models/user.model';

const app = express.Router();

const clientId = config.spotify.clientId;
const redirectUri = 'http://localhost:3000/gencluster';
const AUTHORIZE = 'https://accounts.spotify.com/authorize';

app.get('/login', function (req, res) {
  const state = str.random(16);
  const scope = 'user-read-private user-read-email';
  
  res.status(200).json({"url": 'https://accounts.spotify.com/authorize?' +
          querystring.stringify({
            client_id: clientId,
            response_type: 'code',
            redirect_uri: redirectUri,
            scope: scope,
            state: state
          })});
});

app.post('/recieveCode', async function (req, res) {
  const update = {"spotify_auth": req.body.spotify_auth};
  const conditions = { "email": req.body.email};
  
  User.findOneAndUpdate(conditions, update, function (error: Error) {
    if (error) {
      const data = {
        "error": error
      };
      res.status(400).json(data);
    } else {
      const data = {
        "content": "success"
      };
      res.status(200).json(data);
    }
  });
});

app.post('/protected',controller.spotifyController, async (req, res) => {
  res.status(200).send('Protected info');
});

export = app;

// http://localhost:3000/callback/?code=AQDz1X5Mf6G7Yb3MM84Q4R7dtEXye2PvXswwt-1eXKpW-Mh3H62UkpBxT_IJfkwEDJHrQeXs3Vc_qZy4SrBJCMG8k3RilAqVQU9K46dpGDau0aaXqZsZ_UaEWuw012MyOilXN9f--YR9ChSxcvR_zw_2joejo-Y3k60MV8_dFjuI8phGEcW-agnmtJlessc8qStv3Oy4b9v5O8w86rf49YXTG_Hnyqc&state=5wcjqypEasj0cTu5

// AQDz1X5Mf6G7Yb3MM84Q4R7dtEXye2PvXswwt-1eXKpW-Mh3H62UkpBxT_IJfkwEDJHrQeXs3Vc_qZy4SrBJCMG8k3RilAqVQU9K46dpGDau0aaXqZsZ_UaEWuw012MyOilXN9f--YR9ChSxcvR_zw_2joejo-Y3k60MV8_dFjuI8phGEcW-agnmtJlessc8qStv3Oy4b9v5O8w86rf49YXTG_Hnyqc&state=5wcjqypEasj0cTu5