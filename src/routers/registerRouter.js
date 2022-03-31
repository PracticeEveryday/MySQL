import { Router } from "express";

import { db } from "../db/Schema/user";
import { registerService } from "../service/registerService";

const registerRouter = Router();

registerRouter.post("/register/create", (req, res, next) => {
  try {
    const { email, password, description, name } = req.body;
    const hashedPassword = registerService.hashPassword(password);
    const newUserData = [email, name, description, hashedPassword];

    let sql =
      "INSERT INTO user(email, name, description, password) VALUES(?,?,?,?)";

    db.query(sql, newUserData, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results.insertId);
        res.status(200).json({
          id: results.insertId,
          status: "succ",
        });
      }
    });
  } catch (error) {
    next(error);
  }
});

registerRouter.get("/register", (req, res) => {
  res.json({ status: "succ" });
});

export { registerRouter };
