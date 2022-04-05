import { Router } from "express";

import { registerControl } from "../controller/registerControl";

const registerRouter = Router();

registerRouter.route("/register/create").post(registerControl.addUser);

export { registerRouter };
