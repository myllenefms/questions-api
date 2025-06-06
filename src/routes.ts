import { Router } from "express";
import { getQuestions } from "./controllers/questions-controller";
import { getCategories } from "./controllers/categories-controller";

const router = Router();

router.get("/questions", getQuestions);
router.get("/categories", getCategories);

export default router;