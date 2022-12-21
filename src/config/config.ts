import 'dotenv/config';

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'superuser';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'supersecretpassword1';
const MONGO_HOST = process.env.MONGO_URL || 'INVALID';
const URL = process.env.DB_CONNECT || 'INVALID';

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: URL
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const PORT = process.env.PORT || '1000';

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;