import { Request, Response } from "express";

export const dummyController = (req: Request, res: Response) => {
  res.send("Hello World!");
};
