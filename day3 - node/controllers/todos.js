

const fs = require('fs');
const todosModal = require('../models/todos');


const createNewTodo = async (req, res) => {

    let todo = req.body;

    todo.userId = req.id;

    try {
        let newTodo = await todosModal.create(todo);
        res.status(201).json({ date: { newTodo } });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    
};


const editExistingTodoById = async (req, res) => {
    const todoId = req.params.id; 
    const data = req.body;

    try {
        const editTodo = await todosModal.findByIdAndUpdate(todoId, data, { new: true });

        if (editTodo) {
            res.status(200).json({ message: 'Todo was edited successfully', data: { editTodo } });
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteExistingTodoById = async (req, res) => {
    const todoId  = req.params.id; 

    try {
        const deletedUser = await todosModal.findByIdAndDelete(todoId);

        if (deletedUser) {
            res.status(200).json({ message: 'todo deleted successfully'});
        } else {
            res.status(404).json({ message: 'todo not found'});
        }

    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//BOUNS
//1)Return the todos of specific user 

const returnTodosforSpecificUser = async (req, res) => {
    const UserId = req.params.UserId;
    try {
        if (UserId)
        {
            const found = await todosModal.find({ userId: UserId});
            res.status(200).json(found);   
        } else {
            res.status(404).json({ message: 'User not found'});
        }

    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//2)Return the  posts with specific required filters (defaults are limit 10 skip 0 )

const returnThePostsWithRequiredFilters = async (req, res) => {
    try{
    let { limit, skip } = req.query;
    limit = limit ? +limit : 10;
    skip = skip ? +skip : 0;
        

    const todos = await todosModal.find().limit(limit).skip(skip);

    res.status(200).json({data : todos });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createNewTodo, editExistingTodoById, deleteExistingTodoById ,returnTodosforSpecificUser,returnThePostsWithRequiredFilters};
