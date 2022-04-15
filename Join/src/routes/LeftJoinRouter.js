import { Router } from "express";
import { LeftControler } from "../controller/LeftJoinController";

const LeftJoinRouter = Router();

LeftJoinRouter.route("./join/left").get(LeftControler.getLeft);

export { LeftJoinRouter };
