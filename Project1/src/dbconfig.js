import fs from "fs";
import mysql from "mysql";

// const data = fs.readFileSync("./database.json");
// const conf = JSON.parse(data);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  port: "3306",
  database: "mysql_loginproject",
});

db.connect((err) => {
  if (err) {
    console.log("mysql connection error :" + err);
  } else {
    console.log("mysql is connected successfully.");
  }
});

export { db };
