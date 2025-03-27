import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.mongo_URI;
if(!mongoURI){
    console.log("Error to connect with mongoDb");
    process.exit(1);
}

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDb is connected successfully");
}).catch((err)=>{
    console.error("Error in connecting "+err);
});

export default mongoose;