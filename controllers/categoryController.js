import { db } from "../config/db.js";

//Add category
//route  localhost:5000/category/add-category
//method POST
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

		//check whether the category is existing
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

//Get all category
//route  localhost:5000/category
//method GET
export const getAllCategory = async(req,res)=>{
    const sql = "SELECT category_name FROM category"

    try {
        const [categories] = await db.query(sql)
        // console.log(categories);
        if(categories.length){
            res.status(200).json(categories)
        }else{
            res.status(200).json({message:"no categories found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}
