import { Router } from "express";
import authRouter from "./auth.router";

const globalRouter = Router();

globalRouter.get('/users', authRouter);

export default globalRouter;
