import { Router } from "express";
import * as questController from "./controllers/questions-controller";
import { getCategories } from "./controllers/categories-controller";

const router = Router();

router.get("/questions", questController.getQuestions);
router.get("/questions/:category", questController.getQuestionsByCategory);
router.get("/categories", getCategories);

export default router;