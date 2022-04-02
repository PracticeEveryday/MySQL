import { db } from "../dbconfig";

const loginControl = {
  getUser: async (req, res, nect) => {
    try {
      const { email, password } = req.body;
      const sql = `SELECT * FROM user WHERE email = "${email}"`;
      await db.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length === 0) {
          const errorMessage = "해당 유저가 없습니다.";
          res.json(errorMessage);
        } else if (results[0].password === password) {
          res.status(200).json(results);
        } else {
          const errorMessage = "비밀번호가 틀렸습니다.";
          res.json(errorMessage);
        }
      });
    } catch (error) {
      next(error);
    }
  },
};

export { loginControl };
