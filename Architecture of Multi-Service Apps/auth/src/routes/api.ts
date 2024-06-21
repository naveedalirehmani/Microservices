import { Router } from "express";
const Api1 = Router();

import helloRouter from "./hello/hello.router";

//health route.
Api1.use("/health", helloRouter);

export = Api1;
