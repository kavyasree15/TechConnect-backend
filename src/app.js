const express=require('express');
const app=express();

app.use("/",(req,res)=>{
    res.send("hehheee");
});
app.use("/hello",(req,res)=>{
    res.send("helooo...node");
});
app.use("/test",(req,res)=>{
    res.send("testing....");
});






app.listen(2222,()=>{
    console.log("running successfully");
})