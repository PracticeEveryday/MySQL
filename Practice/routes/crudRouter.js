import { Router } from "express";
import { crudController } from "../controller/crudController";

const crudRouter = Router();

crudRouter.route("/movielist").get(crudController.getMovielist);
crudRouter.route("/movieupdate/:movie_id").put(crudController.update);
crudRouter.route("/addmovie/:movie_id").post(crudController.addMovie);
export { crudRouter };
