import { Router } from "express";

const loginRouter = Router();

loginRouter.get("/login", (req, res) => {
  res.status(200).json({
    status: "succ",
  });
});

export { loginRouter };
