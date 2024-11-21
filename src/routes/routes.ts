import express from "express";
import { dummyController } from "../controllers";

const routes = express.Router();

routes.get("/", dummyController);

export { routes };
