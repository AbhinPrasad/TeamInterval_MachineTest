import multer from "multer";
import path from "path"

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

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');
//     },
   
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });
   
// const upload = multer({ storage: storage })

// export default upload
