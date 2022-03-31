import express from "express";

import { indexRouter } from "./routers/indexRouter";
import { registerRouter } from "./routers/registerRouter";
const app = express();

// 폼형식을 허용해라
app.use(express.urlencoded({ extended: true }));
// json을 허용해라
app.use(express.json());

app.use(indexRouter);
app.use(registerRouter);

export { app };
