import fs from "fs";
import mysql from "mysql";

const database = fs.readFileSync("./database.json");
const conf = JSON.parse(database);

const db = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

db.connect();

export { db };
