import { Router } from "express";
import { InnerJoinController } from "../controller/InnerJoinController";

const InnerJoinRouter = Router();

InnerJoinRouter.route("/join/inner").post(InnerJoinController.getInner);

export { InnerJoinRouter };
