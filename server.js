const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 3000;
const hostname = 'dev-juan.olympic-channelservices.org';

// const privateKey = fs.readFileSync('https_certs/localhost-key.pem', 'utf8');
// const certificate = fs.readFileSync('https_certs/localhost.pem', 'utf8');

const privateKey = fs.readFileSync('https_certs/dev-juan.olympic-channelservices.org-key.pem', 'utf8');
const certificate = fs.readFileSync('https_certs/dev-juan.olympic-channelservices.org.pem', 'utf8');


const credentials = { key: privateKey, cert: certificate };

app.use(express.static('public'));

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, hostname,() => {
  console.log(`Server running at https://${hostname}:${port}`);
});
