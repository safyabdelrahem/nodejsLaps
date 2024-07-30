const express = require('express');
const mongoose = require('mongoose');
//  const todoSchems=mongoose.Schema({
//     title:{
//         type:String,
//         required:[true,"title is required"],
//         unique:true,
//         minLength:3,
//         maxLength:15,
//         trim:true,
//     },
//     status:{
//         type:String,
//         enum:['done','in progress','todo'],
//         default:'todo'
//     }
// })
const User = mongoose.model('User', {
    username: { type: String, required: true, unique: true, minlength: 8 },
    password: { type: String, required: true },
    firstName: { type: String, required: true, minlength: 3, maxlength: 15 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 15 },
    dob: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  // Todo model
  const Todo = mongoose.model('Todo', {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, minlength: 5, maxlength: 20 },
    status: { type: String, default: 'to-do', enum: ['to-do', 'in progress', 'done'] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });




const todoModel=mongoose.model()

