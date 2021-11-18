const express=require("express")
const app=express()
const users=require("./db.json")
app.get("/",(req,res)=>{
    res.send("Welcome to Home page")
})


app.get("/users",(req,res)=>{
    res.send(users)
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
})