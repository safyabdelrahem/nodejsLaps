
const fs= require('fs')
const todoModel=require('../models/todo')

const getAllToDos=async(req, res) => {
    // let todo =  JSON.parse(fs.readFileSync('./todos.json', { encoding: 'utf-8' }));
    // res.json(todo);
    try{
        let todos=await todoModel.find()
        res.status(200).json({data:todos})
    }catch(err){
        res.status(500).json({message:err.message})
    }
 

}



const creteTodo=async(req, res) => {
 let newTodo=req.body;
 try{
    let insertTodo= await todoModel.create(newTodo);
    res.status(201).json({message:'success',data:insertTodo})
 }catch(err){
    res.status(400).json({message:err,})
 }

   
    // let todos = req.body;
    // let todo =   JSON.parse(fs.readFileSync('./todos.json', { encoding: 'utf-8' }));
    // let id = todo.length + 1;
    // todo.push({ title: todos.title, id: id });
    // fs.writeFileSync('./todos.json', JSON.stringify(todos));
    // res.json({ message: 'todo saved' })
    }



   const getById= async(req, res) => {
  
         let {id}=req.params;
         try{
            let todo =await todoModel .findById(id);
            if (todo){
               res.status(200).json({data:todo})
            } else{
               res.status(400).json({message:' todo does not exist'})
            }
         }catch(err){
            res.status(500).json({message:'Try again Later'})
         }
        

        // let { id } = req.params;
        // let todo =  JSON.parse(fs.readFileSync('./todos.json', { encoding: 'utf-8' }));
        // let foundTodo = todo.find(todo => todo.id == id);
        // if (foundTodo) {
        //     res.json(foundTodo);
        // } else {
        //     res.json({ message: `Todo does not exist` });
        // }
    }



   const updateById=  async   (req, res) => {
            
     let { id } = req.params;
      let { title } = req.body;
      try{
        let updatedTodo=await  todoModel.findByIdUpdate(id,{title})
        res.status(200).json({data:updatedTodo})
      }catch(err){
       res.status(422).json({message:err.message})
      }
     

        //     let { id } = req.params;
        //     let { title } = req.body;
        //     let todos =   JSON.parse(fs.readFileSync('./todos.json', { encoding: 'utf-8' }));
        //     let todo = todos.find(todo => todo.id == id);
        //     if (todo) {
        //         todo.title = title;
        //         fs.writeFileSync('./todos.json', JSON.stringify(todos));
        //         res.json({ message: 'success', data: todo });
        //     } else {
        //         res.json({ message: 'failed, todo does not exist' });
        //     }
         }



     const deleteById=       (req, res) => {
                let { id } = req.params;
                let todos =  JSON.parse(fs.readFileSync('./todos.json', { encoding: 'utf-8' }));
                let updatedTodos = todos.filter(todo => todo.id != id);
                if (updatedTodos.length < todos.length) {
                    fs.writeFileSync('./todos.json', JSON.stringify(updatedTodos));
                    res.json({ message: 'success', deletedId: id });
                } else {
                    res.json({ message: 'failed, todo does not exist' });
                }}




                module.exports={getAllToDos,creteTodo,getById,updateById,deleteById}