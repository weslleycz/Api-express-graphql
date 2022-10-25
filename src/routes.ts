import { Router } from "express";
import { list } from "./controllers/project/list";

const router = Router();

router.get("/", list);

export { router };
