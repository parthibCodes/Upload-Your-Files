🚀 Overview--->
The File Uploader API is a robust backend system built with Node.js, Express.js, and MongoDB that allows users to upload, view, and delete files. This project is designed for efficient file handling using Multer for uploads and MongoDB for storing metadata.

🌟 Features---->
✅ Upload Files – Supports file uploads in memory (base64) or disk storage.
✅ Retrieve Files – View all uploaded files with metadata.
✅ Delete Files – Remove files from the database using their unique ID.
✅ Asynchronous Handling – Uses asyncHandler for better error handling.
✅ Secure & Scalable – Uses MongoDB and middleware for efficient performance.


📁 Project Structure--->

📂 File Uploader
│── 📂 src
│   ├── 📂 config
│   │   └── db.mjs                # MongoDB connection setup
│   ├── 📂 controller
│   │   ├── fileDelete.mjs        # Handles file deletion
│   │   ├── fileGetter.mjs        # Retrieves all stored files
│   │   └── fileUploader.mjs      # Handles file uploads using Multer
│   ├── 📂 models
│   │   └── fileModels.mjs        # Mongoose Schema for file storage
│   ├── 📂 routes
│   │   └── fileSystemRoutes.mjs  # Defines API routes
│   ├── 📂 utils
│   │   ├── asyncHandler.mjs      # Middleware for async error handling
│   │   └── uploadToCloudinary.mjs # (Optional) Cloud storage integration
│   └── server.mjs                # Express server setup
│── 📂 uploads                     # Stores uploaded files (if using disk storage)
│── .env                           # Environment variables
│── .gitignore                      # Ignore unnecessary files
│── package.json                     # Dependencies & scripts
│── package-lock.json                 # Dependency lock file


🛠️ Installation & Setup---->

1️⃣ Clone the Repository
git clone https://github.com/parthibCodes/Upload-Your-Files.git
cd file-uploader
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add:
PORT=3000
mongo_URI=<your-mongodb-connection-string>
4️⃣ Run the Server
npm start
The server will start on http://localhost:3000.

🔥 API Endpoints---->
------------------------------------------------------------------
Method	    |  Endpoint	       |    Description                  |
-----------------------------------------------------------------|
POST	      |  **/upload**	   |   Upload a new file             |
GET	        |  **/view**	     |   Retrieve all uploaded files   |
DELETE	    |  **/:id**	       |   Delete a file by ID           |
------------------------------------------------------------------

📌 File Upload Example---->
Send a multipart/form-data request with a file field named "file".

📦 Technologies Used--->
----------------------------------------------
Technology	    Purpose                      |
Node.js	        JavaScript runtime           |
Express.js	    Web framework for APIs       |
MongoDB	        NoSQL database for storage   |
Mongoose	      ODM for MongoDB              |
Multer	        Middleware for file handling |
dotenv	        Manages environment variables|
----------------------------------------------

🎯 Future Enhancements---->
🔹 Cloud Storage Support (e.g., Cloudinary, AWS S3)
🔹 User Authentication & Role-Based Access
🔹 Support for Multiple File Formats (PDFs, Images, Videos, etc.)
🔹 Pagination & Sorting for File Retrieval

