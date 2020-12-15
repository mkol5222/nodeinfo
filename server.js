'use strict';

const express = require('express');

let os = require('os');
let fs = require('fs');

// Postgres db

// accessing Postgres DB
const {
  Pool
} = require('pg');

// DB engine used - by env vars
const pool = new Pool({
  host: process.env.DB_ENDPOINT,
  port: 5432,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log(`[PG] ${process.env.DB_USERNAME} ${process.env.DB_PASSWORD} ${process.env.DB_NAME}`)

async function pgTables() {
  try {
    // test DB
    const data = await pool.query('SELECT * FROM pg_catalog.pg_tables;');
    return data.rows.map(t => t.tablename)
  } catch (err) {
    console.error("[PG] error", err)
  }
  return null;
}

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', async (req, res) => {

  const pgTab = await pgTables();

  fs.readFile("/etc/hostname", "utf8", (err, data) => {
    const resObj = {
      project: "Hello CnC8",
      env: process.env,
      t: Date.now(),
      "Hostname": data,
      "Platform": os.platform(),
      "Arch": os.arch(),
      "CPU count": os.cpus().length,
      "Uptime": os.uptime(),
      cpus: os.cpus(),
      netIf: os.networkInterfaces(),
      pgTables: pgTab
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
