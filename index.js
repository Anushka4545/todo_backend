const express = require('express')
const app = express()
const port = 3110
const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/Todo"
const Todo = require('./Models/Todo');
const User = require('./Models/User');


mongoose.connect(mongoURI);
app.use(express.json())

app.post("/addTodo",async (req,res)=>{
  try {
    const todo = await Todo.create({
        title:req.body.title,
        userId:req.body.userId,
        Description:req.body.description
    })
    res.json(todo)

} catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error ")
}
})

app.get("/viewTodo",async (req,res)=>{
  try {
    const todo = await Todo.find({
      userId:req.body.userId
    })
    res.json(todo)

} catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error ")
}
})

app.post("/checkTodo",async (req,res)=>{
  try {
    const todo = await Todo.findByIdAndUpdate({
        _id:req.body.id
    },{ status: req.body.status })
    res.json(todo)

} catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error ")
}
})

app.post("/updateTodo",async (req,res)=>{
  try {
    const todo = await Todo.findByIdAndUpdate({
        _id:req.body.id
    },{ title: req.body.title, Description: req.body.description })
    res.json(todo)

} catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error ")
}
})

app.post("/deleteTodo",async (req,res)=>{
  try {
    const todo = await Todo.findByIdAndDelete({
        _id:req.body.id
    })
    res.json(todo)

  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error ")
  }
})

app.post("/registerUser",async (req,res)=>{
  try {
    const user = await User.create({
        username : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    res.json(user)

  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error ")
  }
})

app.post("/login",async (req,res)=>{
  try {
    const user = await User.findOne({
        email : req.body.email,
        password : req.body.password
    });
   res.json(user)
  
   

  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error ")
  }
})

app.listen(port, () => {
  console.log(`Todo Backend running at http://localhost:${port}`)
})