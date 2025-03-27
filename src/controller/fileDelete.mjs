import File from "../models/fileModels.mjs";


const Delete = async(req,res,next)=>{
    try{
        const fileId = req.params.id;  // Get the fileId from the URL parameters
        
        // Attempt to delete the file by its ID
        const response = await File.findByIdAndDelete(fileId);

        // If no file is found and deleted
        if (!response) {
            return res.status(404).json({ error: "This file doesn't exist in the database" });
        }

        console.log("File deleted");

        // Send success message
        res.status(200).json({ message: "File deleted successfully" });

    }
    catch(err){
        console.error("Error is: ", err);
        res.status(500).json({ error: "Server error while deleting file" });
    }
}








export default Delete;