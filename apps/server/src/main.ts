import { Application } from 'express'
// import schema from './src/graphql'
// import * as GraphQLHTTP from 'express-graphql'
import * as Parse from 'parse/node'
// import express = require( 'express' )
import * as express from "express";
// import * as cors from "cors";
// import { express as middleware } from 'graphql-voyager/middleware'

const ParseServer = require('parse-server').ParseServer
const path = require('path')
const cors = require('cors')
const MASTER_KEY = process.env.MASTER_KEY || 'some-key'
const CLOUD_CODE_MAIN = process.env.CLOUD_CODE_MAIN || __dirname + '/src/cloud'
const APP_ID = process.env.APP_ID || 'bwl'
const port = process.env.PORT || 1337
const SERVER_URL = process.env.SERVER_URL || `http://localhost:${port}/api`  // Don't forget to change to https if needed
const LIVEQUERY_CLASSNAMES = [ ]
let DATABASE_URI = process.env.DATABASE_URI || process.env.MONGODB_URI

if (!DATABASE_URI) {
    DATABASE_URI = 'mongodb://localhost:27017/bwlparse'
    console.log(`DATABASE_URI not specified, falling back to ${DATABASE_URI}`)
}

console.log(`CLOUD ${CLOUD_CODE_MAIN}`);

const api = new ParseServer({
    allowOrigin: "*",
    databaseURI: DATABASE_URI,
    // cloud: CLOUD_CODE_MAIN,
    appId: APP_ID,
    masterKey: MASTER_KEY,
    serverURL: SERVER_URL,
    liveQuery: {
        classNames: LIVEQUERY_CLASSNAMES, // List of classes to support for query subscriptions
    },
})
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

const app: Application = express.default(); //express()

// Serve static assets from the /public folder
// app.use('/public', express.static(path.join(__dirname, '/public')))

// Serve the Parse API on the /parse URL prefix
const mountPath = process.env.PARSE_MOUNT || '/api'
app.use(mountPath, api)

var corsOptions = {
  origin: 'https://bwl-parse.web.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Parse Server plays nicely with the rest of your web routes
app.get('/', cors(corsOptions), (req, res) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://bwl-parse.web.app/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  res
    .status(200)
    .send('I dream of being a website.  Please star the parse-server repo on GitHub!')
})

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
// app.get('/test', (req, res) => res.sendFile(path.join(__dirname, '/public/test.html')))

//Initialize Parse
// Parse.initialize(APP_ID);
// Parse.serverURL = SERVER_URL;
// Parse.masterKey = MASTER_KEY;
// Parse.Cloud.useMasterKey();

import './cloud/main.ts';

//GraphQL
// app.use('/graphql', GraphQLHTTP((request) => ({
//     graphiql: true,
//     pretty: true,
//     schema,
//     context: {
//         sessionToken: request.headers[ 'x-parse-session-token' ],
//     },
// })))

// app.use('/graph', middleware({ endpointUrl: '/graphql' }));


const httpServer = require('http').createServer(app)
httpServer.listen(port, () => {
    console.log(`StaticServer running on ${SERVER_URL.replace('/parse','/')}`)
    console.log(`Parse Server running on ${SERVER_URL}`)
    // console.log(`Graphql running on ${SERVER_URL.replace('/parse','/graphql')}`)
    // console.log(`Graphql Visual running on ${SERVER_URL.replace('/parse','/graph')}`)
})

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer)