import { Router } from "express";

import { loginService } from "../service/loginService";
import { db } from "../db/Schema/user";

const loginRouter = Router();

loginRouter.post("/login", (req, res, next) => {
  try {
    const { email, password } = req.body;
    let sql = `SELECT * FROM user WHERE email = '${email}'`;
    db.query(sql, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    next(error);
  }
});

export { loginRouter };
