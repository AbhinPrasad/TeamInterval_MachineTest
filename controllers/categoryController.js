import { db } from "../config/db.js";

export const addCategory = async (req, res) => {
	const { category } = req.body;

	if (!category) {
		res.status(400).json({ message: "fill all fields" });
	}

	//sql queries
	const sqlGet = "SELECT * FROM category WHERE category_name = ?";
	const sqlInsert = "INSERT INTO category(category_name) VALUES(?)";

	try {
		const [categoryExists] = await db.query(sqlGet, [category]);
		console.log(categoryExists, "category");
		if (categoryExists.length !== 0) {
			res.status(400).json({ message: "category exists" });
		} else {
			const addCategory = await db.query(sqlInsert, [category]);
			res.status(201).json({ message: "category added successfully" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
};
