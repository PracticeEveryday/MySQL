import { db } from "../dbconfig";

const loginControl = {
  getUser: async (req, res, next) => {
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

  updateUser: async (req, res, next) => {
    try {
      // const email = req.body.email ?? undefined;
      // const name = req.body.name ?? null;
      // const discription = req.body.discription ?? null;
      // const password = req.body.password ?? null;
      const { email, name, discription, password } = req.body;
      const id = req.params.id;
      console.log(id);
      console.log(email, name, discription, password);
      // UPDATE user SET name = "김성훈" WHERE id = 2
      const sql = `UPDATE user SET email = '${email}', name = '${name}', password = ${password}, discription = '${discription}' WHERE id = ${id}`;
      await db.query(sql, (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results);
      });
    } catch (error) {
      next(error);
    }
  },
};

export { loginControl };
