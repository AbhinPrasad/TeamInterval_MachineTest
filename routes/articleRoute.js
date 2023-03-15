import express from "express";
import {
	addArticle,
	getAllArticles
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

export default router;
