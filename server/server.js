const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");


const app = express();
const PORT = 3001;

//path 
const usersFilePath = path.join(__dirname, "users.json");

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
      const user = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));

      if (username === user.username && password === user.password) {
           
          res.json({message: "success"});
      } else {
          res.status(401).json({ message: "Invalid username or password" });
      }
  } catch (error) {
      res.status(500).json({ message: "Error reading user file", error });
  }
});
  

// Basic root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the attendance system server." });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
