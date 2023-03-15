import express from "express";

import {
	addCategory,
	getAllCategory
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getAllCategory);
router.post("/add-category", addCategory);

export default router;
