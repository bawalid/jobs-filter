const express = require('express');
const fs = require('fs');

const app = express();

let rawdata = fs.readFileSync('data.json');
let job = JSON.parse(rawdata);



app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("app",{card: job, filter: false});
});


app.listen('3000', function(){
    console.log("server started at port 3000");
});