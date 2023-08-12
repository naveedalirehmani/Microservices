const express = require("express");
const app = express()

const PORT = process.env.PORT || 8000

app.get("/",(request,response)=>{
response.send("hellow image :)")
});

app.listen(PORT,()=>{
console.log("server is live on port"+PORT)})

