

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




module.exports = { createNewTodo, editExistingTodoById, deleteExistingTodoById ,returnTodosforSpecificUser,returnThePostsWithRequiredFilters};
