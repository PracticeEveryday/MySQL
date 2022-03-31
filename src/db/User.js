import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  database: "login_project",
});

class UserModel {
  static create = async (newUserData) => {
    await db.connect((err) => {
      if (err) {
        console.log(err);
      }
    });

    console.log(newUserData);

    let sql =
      "INSERT INTO user(email, name, description, password)VALUES(?,?,?,?)";

    const newUser = await db.query(sql, newUserData, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results.insertId);
      }
    });
    console.log(typeof newUser);
    return newUser;
  };
}

export { UserModel };
