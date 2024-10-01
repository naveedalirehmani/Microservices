import { Request, Response, Router } from "express";

const authRouter = Router();

authRouter.get(
  "/current-user",
  (request: Request, response: Response) => {
    response.status(200).json({ message: "current-user-here" });
  }
);

export default authRouter;
