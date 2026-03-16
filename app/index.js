import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Version 2 running");
})

app.listen(PORT,()=>{
console.log(`App is listening on port:${PORT}`);
})