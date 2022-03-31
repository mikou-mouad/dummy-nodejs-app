//express app to handle requests
const express = require('express');

//var express = require("express");
var app = express();

app.listen(1313, () => {
 console.log("Server is running on port 1313");
});

app.get("/hello", (req, res, next) => {
    res.json(["Emre","Çakmak"]);
});
