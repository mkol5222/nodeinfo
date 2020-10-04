# NodeInfo 

* inspired by https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/ and https://github.com/openfaas/faas/blob/master/sample-functions/NodeInfo/main.js

## Environment

| Env variable        | Description           | Note  |
| ------------- |-------------| -----|
| DB_ENDPOINT      | Postgres hostname | |
| DB_USERNAME | Postgres account username | |
| DB_PASSWORD| Postgres account password | |
| DB_NAME| Postgres database name | |
Note: Postgres DB is expected on port 5432

## Changelog

* 04/Oct/2020 - added pgTables controlled by env vars
