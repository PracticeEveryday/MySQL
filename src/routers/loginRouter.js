import { Router } from "express";

import { loginControl } from "../controller/loginControl";

const loginRouter = Router();

loginRouter.route("/login").post(loginControl.getUser);

// loginRouter.get("/login", (req, res) => {
//   res.status(200).json({
//     status: "succ",
//   });
// });

export { loginRouter };
