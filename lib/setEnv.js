const path = require('path');
const fs = require('fs');

// Sets environment variables defined in .env
function setEnv() {
  // gets path to .env file
  const envPath = path.resolve(process.cwd(), '.env');

  // synchronously read data from .env
  const dataBuffer = fs.readFileSync(envPath);

  // convert to string
  const parseDataBuffer = dataBuffer.toString('utf8');

  // split the string at each new line
  parseDataBuffer.split('\n').forEach(line => {
    // match key value pairs only
    const keyValueArr = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);

    // set env variables only if we have data
    if (keyValueArr !== null) {
      // contains the full key
      const key = keyValueArr[1];

      // contains the full value
      const value = keyValueArr[2];

      process.env[key] = value;
    }
  });
}

module.exports = setEnv;
