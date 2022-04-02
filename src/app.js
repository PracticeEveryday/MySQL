import express from "express";

import { indexRouter } from "./routers/indexRouter";
import { registerRouter } from "./routers/registerRouter";
import { loginRouter } from "./routers/loginRouter";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(indexRouter);
app.use(registerRouter);
app.use(loginRouter);

export { app };
