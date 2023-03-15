import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

import categoryRoutes from "./routes/categoryRoute.js";
import articleRoutes from "./routes/articleRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/category", categoryRoutes);
app.use("/articles", articleRoutes);

app.listen(process.env.PORT, () => {
	console.log(`connected to port:${process.env.PORT}`.bgCyan);
});
