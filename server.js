const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/students", (req, res) => {
    res.send("Samim, Rahim, Karim");
});

app.get("/contact", (req, res) => {
    res.send("Contact Us");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
