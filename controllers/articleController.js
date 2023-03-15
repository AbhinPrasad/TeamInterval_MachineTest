import { db } from "../config/db.js";
import cloudinary from "../utils/cloudinary.js";

export const addArticle = async(req,res)=>{
    // console.log(req.file,"file");
    // console.log(req.files["thumbnail"][0]);
    // console.log(req.files['featured'][0]);
    // console.log(req.body,"body");
    const thumbnail = req.files["thumbnail"][0]
    const featured = req.files['featured'][0]

    try {
        // const result = await cloudinary.uploader.upload(req.file.path)
        const featuredResult = await cloudinary.uploader.upload(featured.path, { folder: 'team_interval' });
        console.log(featuredResult);
    const thumbnailResult = await cloudinary.uploader.upload(thumbnail.path, { folder: 'team_interval' });
    res.json({
        thumbnailPublicId: thumbnailResult.public_id,
        featuredPublicId: featuredResult.public_id
      });
        
    } catch (error) {
        console.log(error);
    }
}