import { db } from "../config/db.js";
import cloudinary from "../utils/cloudinary.js";

export const addArticle = async (req, res) => {
	// console.log(req.file,"file");
	// console.log(req.files["thumbnail"][0]);
	// console.log(req.files['featured'][0]);
	// console.log(req.body,"body");
	const { heading, readTime, description, categories, status } = req.body;
	const thumbnail = req.files["thumbnail"][0];
	const featured = req.files["featured"][0];

	const sql =
		"INSERT INTO articles(heading,read_time,description,categories,thumbnail,featured,status) VALUES(?,?,?,?,?,?,?)";

	try {
		const featuredResult = await cloudinary.uploader.upload(featured.path);
		const thumbnailResult = await cloudinary.uploader.upload(thumbnail.path);
		const addArticle = await db.query(sql, [
			heading,
			readTime,
			description,
			categories,
			thumbnailResult.url,
			featuredResult.url,
			status
		]);
		console.log(addArticle, "addArticle");
		res.status(201).json({
			heading,
			readTime,
			description,
			categories,
			thumbnailURL: thumbnailResult.url,
			featuredURL: featuredResult.url,
			status
		});
	} catch (error) {
		console.log(error);
	}
};

export const getAllArticles = async (req, res) => {
	const sql = "SELECT * FROM articles";
	try {
		const [articles] = await db.query(sql);
		console.log(articles);
		res.status(200).json(articles);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
};
