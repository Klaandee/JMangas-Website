const fs = require('fs');

if (fs.existsSync('./.env')) {
  fs.unlinkSync('./.env');
}
fs.copyFileSync('./demo.env', './.env');