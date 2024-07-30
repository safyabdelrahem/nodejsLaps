const express=require('express');
let router=express.Router();
const fs = require('fs');
const {getAllToDos,creteTodo,getById,updateById,deleteById}=require ('../controllers/todo')




// // Create a new todo
// router.post('/',getAllToDos
// );

// // Get all todos
// router.get('/', creteTodo
// );

router.route('/').get(getAllToDos).post(creteTodo);

// Get todo by id
// router.get('/:id', getById
// );

// // Update todo by id
// router.patch('/:id', updateById
// );

// // Delete todo by id
// router.delete('/:id',deleteById 
// );


router.route('/:id').get(getById).patch(updateById).delete(deleteById)

module.exports=router;