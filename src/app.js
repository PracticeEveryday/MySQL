import express from "express";

import { indexRouter } from "./routers/indexRouter";
import { registerRouter } from "./routers/registerRouter";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(indexRouter);

export { app };
