import express from "express";

import { indexRouter } from "./routers/indexRouter";

const app = express();

// 폼형식을 허용해라
app.use(express.urlencoded({ extended: true }));
// json을 허용해라
app.use(express.json());

app.use(indexRouter);

export { app };
