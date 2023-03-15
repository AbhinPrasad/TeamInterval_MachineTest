import express from "express";
import {
	addArticle,
	deleteArticle,
	getAllArticles,
	updateArticle
} from "../controllers/articleController.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.get("/", getAllArticles);
router.post(
	"/add-article",
	upload.fields([
		{ name: "thumbnail", maxCount: 1 },
		{ name: "featured", maxCount: 1 }
	]),
	addArticle
);
router.put("/update-article/:id", updateArticle);
router.delete("/delete-article/:id", deleteArticle);

export default router;
