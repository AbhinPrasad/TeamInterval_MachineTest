import { db } from "../config/db.js";
import cloudinary from "../utils/cloudinary.js";

//Add article
//route  localhost:5000/articles/add-article
//method POST
export const addArticle = async (req, res) => {
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

//get all articles
//route  localhost:5000/articles
//method GET
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

//Update article
//route  localhost:5000/articles/update-article
//method POST
export const updateArticle = async (req, res) => {
	console.log(req.params.id);
	// console.log(req.body);
	const id = parseInt(req.params.id);
	console.log(typeof req.params.id, "type");

	const updates = req.body;
	const updateFields = [];
	const updateValues = [];
	const sql = `UPDATE articles SET ${updateFields.join(
		", "
	)} WHERE article_id = ?`;
	console.log(sql, "sql");
	for (let field in updates) {
		updateFields.push(`${field} = ?`);
		updateValues.push(updates[field]);
	}
	console.log(updateFields);
	console.log(updateValues);

	try {
		const [article] = await db.query(sql, [id]);
		console.log(article, "article");
	} catch (error) {
		console.log(error);
	}
};
