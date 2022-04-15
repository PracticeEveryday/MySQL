import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  port: "3306",
  database: "join",
});

db.connect((error) => {
  if (error) {
    console.log("mysql error: " + error);
  } else {
    console.log("mysql connection success");
  }
});

export { db };
