# 📂 File Uploader

A simple **File Uploader API** built using **Node.js, Express, MongoDB, and Multer**. It allows users to **upload, view, and delete files** efficiently.

## 🚀 Features

- Upload files using **Multer (memory storage)**.
- Store files in **MongoDB** as Base64-encoded strings.
- Retrieve a list of uploaded files.
- Delete files from the database.
- Error handling with **asyncHandler**.
- Modular structure for better maintainability.

## 🛠 Technologies Used

- **Node.js** - Server-side runtime.
- **Express.js** - Web framework.
- **MongoDB & Mongoose** - Database & ODM.
- **Multer** - File upload handling.
- **dotenv** - Environment variable management.

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/file-uploader.git
   cd file-uploader

## ⚙️ Install Dependencies

```sh
npm install

## 🔥 API Endpoints

| Method  | Endpoint  | Description                |
|---------|----------|-----------------------------|
| `POST`  | `/upload` | Upload a file              |
| `GET`   | `/view`   | Get all uploaded files     |
| `DELETE`| `/:id`    | Delete a file by ID        |


## 📌 Usage

1. Use **Postman** or any API client to test the endpoints.
2. The `/upload` endpoint accepts a file as **multipart/form-data** with the key `"file"`.
3. The uploaded file is **stored as Base64 in MongoDB**.
4. The `/view` endpoint retrieves all uploaded files.
5. The `DELETE /:id` endpoint removes a file by its **MongoDB ID**.
