
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello! My server is running!");
});

app.get("/about", (req, res) => {
    res.send("This is my first Node.js server.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
