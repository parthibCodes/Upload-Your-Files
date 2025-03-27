import express from "express";
import {fileUploader} from "../controller/fileUploader.mjs";
import asyncHandler  from "../utils/asyncHandler.mjs";
import File from "../models/fileModels.mjs";
import Delete from "../controller/fileDelete.mjs";
import viewFile from "../controller/fileGetter.mjs";

const router = express.Router();

router.post('/upload',fileUploader,asyncHandler(async(req,res,next)=>{
    const fileBase64 = req.file ? req.file.buffer.toString('base64') : null;
    const fileName = req.file ? req.file.originalname : null;
    const file = await File.create({fileName, path:fileBase64});
    res.status(201).json({file});
}));
router.delete('/:id',Delete);
router.get('/view',viewFile);

export default router;