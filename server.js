'use strict';

const express = require('express');

let os = require('os');
let fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  fs.readFile("/etc/hostname", "utf8", (err, data) => {
    const resObj = {
      "Hostname": data,
      "Platform": os.platform(),
      "Arch": os.arch(),
      "CPU count": os.cpus().length,
      "Uptime": os.uptime(),
      cpus: os.cpus(),
      netIf: os.networkInterfaces()
    }
    //if (content && content.length && content.indexOf("verbose") > -1) {
    //res.send(os.cpus());
    //res.send(os.networkInterfaces());
    //}

    res.json(resObj);
  });

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);