const express = require("express");
const app = express();
const port = 8000;
var cors = require("cors");
const multer = require("multer");
const path = require("path"); // Make sure you have this line to import the 'path' module

const connectToMongoose = require("./DB/db");
app.use(cors());
//convert to json form
app.use(express.json());

// routes
app.use("/api/vehicles/", require("./Routes/vehicles"));

app.use("/api/users",require("./Routes/users"))
//code for multer setup and use
app.use("/", express.static("uploads"));
// Set up Multer storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Create Multer instance
const upload = multer({ storage });

// Handle image upload
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const imagePath = req.file.filename;
    // Save imagePath to your database
    console.log(imagePath + "ok");
    // Respond with the imagePath
    res.json({ imagePath });
  } catch (error) {
    console.error("Error uploading image:", error);
  }
});

connectToMongoose();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
