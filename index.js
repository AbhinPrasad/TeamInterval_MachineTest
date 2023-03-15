import express from "express";
import colors from "colors";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
dotenv.config();


import categoryRoutes from "./routes/categoryRoute.js";
import articleRoutes from "./routes/articleRoute.js";
import { addArticle } from "./controllers/articleController.js";
import { upload } from "./utils/multer.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static( "/images"));

//routes
app.use("/category", categoryRoutes);
// app.use("/articles", articleRoutes);

//routes with files
// const upload = multer({ dest: 'uploads/' });
app.post('/articles/add-article', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'featured', maxCount: 1 }]),addArticle)


app.listen(process.env.PORT, () => {
	console.log(`connected to port:${process.env.PORT}`.bgCyan);
});

