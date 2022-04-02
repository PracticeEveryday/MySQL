import { db } from "../dbconfig.js";

const registerControl = {
  addUser: async (req, res) => {
    try {
      const { email, password, name } = req.body;
      const sql = `INSERT INTO user(email, password, name) VALUES("${email}", "${password} ", "${name} ")`;
      db.query(sql, (error, results) => {
        if (error) throw error;
        res.status(200).json(results);
      });
    } catch (error) {
      next(error);
    }
  },
};

export { registerControl };
