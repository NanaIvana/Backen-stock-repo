import * as express from "express";
import { createCategory } from "../category/controller/category.controller";
const Router = express.Router();


Router.post("/Category", createCategory);