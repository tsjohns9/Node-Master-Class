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
var cli = require('./lib/cli');
require('./lib/setEnv')();

// declare the app;
var app = {};

// init function
app.init = function(callback) {
  // start the server
  server.init();
  // start the workers
  workers.init();

  // start the cli
  setTimeout(function() {
    cli.init();
    callback();
  }, 50);
};

// self invoking only if required directly
if (require.main === module) {
  app.init(function() {});
}

module.exports = app;
