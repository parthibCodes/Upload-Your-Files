import File from "../models/fileModels.mjs";
import asyncHandler from "../utils/asyncHandler.mjs";
import multer from "multer";

/*
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        const suffix = Date.now();
        cb(null,suffix+"-"+file.originalname);
    }
});
*/

const storage = multer.memoryStorage();

const upload = multer({storage});
export const fileUploader = upload.single("file");
