const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
module.exports = {
    readFile(link) {
        fs.readFile(link, "utf-8", function (err, data) {
            if (err) {
                console.log("error reading file");
            }
            else {
                console.log("file read successfully ", data);
            }
        })
    }
}
app.listen(3000, function (err, data) {
    if (err) {
        console.log("Error connecting server");
    }
    else {
        console.log("Server connected @ Port 3000 ");
    }
})