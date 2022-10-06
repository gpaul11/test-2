var path = require("path");
var express = require("express");
var app = express();
var HTTP_PORT = process.env.PORT || 8080;
var data=require("./data_prep");

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.get("/cpa", function(req,res){
  data.cpa().then(function(data){
    res.json(data);
  })
});

app.get("/GPA", function(req,res){
  data.highGPA().then(function(data){
    res.json(data);
  })
});
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
});


app.get('*', function(req, res){
    res.send('<h1 class=\"error\">Page Not Found</h1>', 404);
  });


data.prep().then(function() {
app.listen(HTTP_PORT, onHttpStart);    
}).catch(function(data){
//when data is not loaded at all
    console.log(data);
});
