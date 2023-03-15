import express from "express";
import colors from "colors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
	console.log(`connected to port:${process.env.PORT}`.bgWhite);
});
