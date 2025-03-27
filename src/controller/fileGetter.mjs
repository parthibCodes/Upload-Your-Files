import File from "../models/fileModels.mjs";
import asyncHandler from "../utils/asyncHandler.mjs";

const viewFile = asyncHandler (async(req,res,next)=>{
    const files = await File.find();
    if(files.length === 0){
        return res.status(404).json({error:"No files found"});
    }
    res.status(200).json({files});
});
export default viewFile;