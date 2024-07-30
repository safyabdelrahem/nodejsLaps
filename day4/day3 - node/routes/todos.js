const express = require('express')
const router = express.Router();
const fs = require('fs');
const {auth} = require('../middlewares/auth');

const {createNewTodo, editExistingTodoById, deleteExistingTodoById ,  returnTodosforSpecificUser , returnThePostsWithRequiredFilters} = require('../controllers/todos');
  
router.post('/', auth, createNewTodo);

router.patch('/:id', editExistingTodoById);

router.delete('/:id', deleteExistingTodoById);


//BOUNS
//1
router.get('/:UserId/todos', returnTodosforSpecificUser);


//2
router.get('/', returnThePostsWithRequiredFilters);


module.exports = router;