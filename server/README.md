# Project Cluster Prism

Server side of the Cluster Prism FullStack project
Developed by [TurnerTastic](https://github.com/TurnerTastic1)

## API/Server Usage

Clone [Project-Cluster-Prism](https://github.com/TurnerTastic1/Project-Cluster-Prism)

### Configure ports using Dotenv -
    npm i

Then create dotenv files based on server config files located in src, setting port to 3000 and other info

### Configure mongo atlas db:
You will need to setup a mondodb atlas account and run any db instance(free option works fine for this). Then connect the db to the API per mongo documentation.
#### To start -
    npm run clean
    npm run build
    npm run start

#### To enter dev mode -
    npm run clean &&
    npm run build &&
    npm run dev