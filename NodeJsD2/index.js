const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
let todoRoutes=require('./routes/todo');
let userRouter=require('./routes/user');
app.use('./todos',todoRoutes);
app.use('/user',userRouter);
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/uiAssuit').then(()=>{
console.log("connected to db successfully");
}).catch(()=>{
 console.log(err);
})



// Register a user
app.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Get first names of all registered users
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find({}, 'firstName');
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Delete a user
  app.delete('/users/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Edit a user
  app.patch('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: 'User was edited successfully', user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Create a new todo
  app.post('/todos', async (req, res) => {
    try {
      const todo = await Todo.create(req.body);
      res.json(todo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Edit a todo
  app.patch('/todos/:id', async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(todo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Delete a todo
  app.delete('/todos/:id', async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get todos of a specific user
  app.get('/users/:userId/todos', async (req, res) => {
    try {
      const todos = await Todo.find({ userId: req.params.userId });
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
 
  








app.listen(3000, () => {
    console.log("server running on port 3000");
});
