import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  database: "login_project",
});

export { db };
