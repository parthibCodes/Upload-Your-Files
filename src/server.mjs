import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./config/db.mjs";
import router from "./routes/fileSystemRoutes.mjs";
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(router);
app.listen(port,()=>{
    console.log(`Server is listening in ${port}`);
});