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
}

export { UserModel };
