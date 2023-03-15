import { db } from "../config/db.js";
import cloudinary from "../utils/cloudinary.js";

export const addArticle = async (req, res) => {
	// console.log(req.file,"file");
	// console.log(req.files["thumbnail"][0]);
	// console.log(req.files['featured'][0]);
	// console.log(req.body,"body");
	const thumbnail = req.files["thumbnail"][0];
	const featured = req.files["featured"][0];

	try {
		const featuredResult = await cloudinary.uploader.upload(featured.path);
		const thumbnailResult = await cloudinary.uploader.upload(thumbnail.path);
		res.status(200).json({
			thumbnailURL: thumbnailResult.url,
			featuredURL: featuredResult.url
		});
	} catch (error) {
		console.log(error);
	}
};
