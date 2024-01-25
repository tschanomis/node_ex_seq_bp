import express, { Application } from "express";

import api from "./api";

const app: Application = express();

app.use(express.json());
app.use(api);

export default app;
