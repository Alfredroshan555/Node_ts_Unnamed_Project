import express, { Express, Request, Response } from "express";
import { routes } from "./src/routes/routes";

// Create Express app
const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/", routes);

app.listen(port, () => {
  console.log(`server: Server is running at http://localhost:${port}`);
});
