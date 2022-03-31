import { Router } from "express";

import { registerService } from "../service/registerService";

const registerRouter = Router();

registerRouter.post("/register/create", async (req, res, next) => {
  try {
    const { email, name, description, password } = req.body;
    const newUser = await registerService.create({
      email,
      name,
      description,
      password,
    });
    res.status(200).json({ status: "succ" });
  } catch (error) {
    next(error);
  }
});

registerRouter.get("/register", (req, res) => {
  res.json({ status: "succ" });
});

export { registerRouter };
