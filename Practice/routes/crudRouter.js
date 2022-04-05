import { Router } from "express";
import { crudController } from "../controller/crudController";

const crudRouter = Router();

crudRouter.route("/movielist").get(crudController.getMovielist);
export { crudRouter };
