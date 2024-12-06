const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const PORT = 3001;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the attendance system server." });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
