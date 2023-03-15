import multer from "multer";
import path from "path";

export const upload = multer({
	storage: multer.diskStorage({}),
	fileFilterL: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
			cb(new Error("File type is not supported"), false);
			return;
		}
		cb(null, true);
	}
});
