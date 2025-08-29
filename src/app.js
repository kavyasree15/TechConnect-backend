const express=require('express');
const app=express();


app.get("/user",(req,res)=>{
    res.send({firstName:"kavyasree",lastName:"Gorjila"});
});

app.post("/user",(req,res)=>{
    console.log("data saved successfully...");
    res.send("data added to database");
});
app.delete("/user",(req,res)=>{
    res.send("deleted successfully");
});
app.use("/",(req,res)=>{
    res.send("helooo...hello");
});




app.listen(2222,()=>{
    console.log("running successfully");
})