const express = require("express");
const app = express();

const PORT = 4000;

function handleHome(req,res){
    res.send("hi");
}


function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}
app.get("/", handleHome);
app.listen(PORT, handleListening);