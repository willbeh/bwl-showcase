/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { ParseServer } from 'parse-server';

const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
const args = process.argv || [];
const test = args.some(arg => arg.includes('jasmine'));

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}
const config = {
  databaseURI: databaseUri || 'mongodb://localhost:27017/bwlparse',
  // cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'bwl',
  masterKey: process.env.MASTER_KEY || 'some-key', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'https://localhost:1337/api', // Don't forget to change to https if needed
  // liveQuery: {
  //   classNames: ['Posts', 'Comments'], // List of classes to support for query subscriptions
  // },
};

const app = express();

// Serve the Parse API on the /parse URL prefix
const mountPath = process.env.PARSE_MOUNT || '/api';
if (!test) {
  const api = new ParseServer(config);
  app.use(mountPath, api);
}

/**
 * Cloud Functions
 */
import './cloud/functions/test-function';

// const port = process.env.PORT || 1337;
// if (!test) {
//   const httpServer = require('http').createServer(app);
//   httpServer.listen(port, function () {
//     console.log('parse-server-example running on port ' + port + '.');
//   });
//   // This will enable the Live Query real-time server
//   ParseServer.createLiveQueryServer(httpServer);
// }

const port = process.env.PORT || 1337;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
