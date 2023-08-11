const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "index.html"));
})
const server = app.listen(6969);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);