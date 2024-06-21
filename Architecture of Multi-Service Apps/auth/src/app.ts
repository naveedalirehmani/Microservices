import express, { Express } from "express";

import Api1 from "./routes/api";

const app: Express = express();

app.use(express.json());

// for serving static files.
// app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/auth/v1", Api1);

export default app;
