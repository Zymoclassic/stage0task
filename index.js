require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;

  
// Middlewares
app.use(cors());
app.use(express.json());

// User Data
const user = { 
    email: "awopejumoses@gmail.com",
    current_datetime: new Date().toISOString(), 
    github_url: "<https://github.com/Zymoclassic/stage0task>"
}

// Route
app.get("/", (req, res) => {
  res.status(200).json(user);
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
