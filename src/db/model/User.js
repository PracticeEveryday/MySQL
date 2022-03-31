import { db } from "../Schema/user";

class UserModel {
  static create = async (newUserData) => {
    let sql =
      "INSERT INTO user(email, name, description, password)VALUES(?,?,?,?)";

    const newUser = await db.query(sql, newUserData, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results.insertId);
      }
    });

    return newUser;
  };

  static findByEmail = ({ email }) => {
    console.log(email);
    let sql = `SELECT * FROM user WHERE email = '${email}'`;
    let result = [];
    const User = db.query(sql, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        result = results;
      }
    });
    console.log("result", result);
    console.log(User);
    return result;
  };
}

export { UserModel };
