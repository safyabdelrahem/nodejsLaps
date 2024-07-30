const fs = require('fs');

const express = require('express')

let todosRoutes = require('./routes/todos')
let usersRoutes = require('./routes/users');
const { default: mongoose } = require('mongoose');


const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/nodeDatabase').then(()=> {
    console.log('circular connection');
}).catch(err => {
    console.log(err)
})

app.use(express.json());
app.use('/todos', todosRoutes);
app.use('/users', usersRoutes);




app.listen(3000, () => {
    console.log(`Server is running`);
});