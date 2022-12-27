import 'dotenv/config';

const spotify = {
  clientId: process.env.SPOTIFY_CLIENTID || 'INVALID',
  clientSecret: process.env.SPOTIFY_CLIENTSECRET || 'INVALID'
};

const config = {
  spotify: spotify
};

export default config;