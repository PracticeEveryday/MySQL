import { Router } from "express";
import { LeftControler } from "../controller/LeftJoinController";

const LeftJoinRouter = Router();

LeftJoinRouter.route("/join/left").post(LeftControler.getLeft);

export { LeftJoinRouter };
