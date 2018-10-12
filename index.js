/*
  -- Modules being used --
  Command Line Options
  Console
  Crypto
  File System
  Globals
  HTTP
  HTTPS
  Modules
  Path
  Process
  Query String
  String Decoder
  Timers
  URL
  Utilities
  Buffer
  Zlib
  Stream
*/

// dependencies
var server = require('./lib/server');
var workers = require('./lib/workers');
require('./lib/setEnv')();

// declare the app;
var app = {};

// init function
app.init = function() {
  // start the server
  server.init();
  // start the workers
  workers.init();
};

// execute
app.init();

module.exports = app;
