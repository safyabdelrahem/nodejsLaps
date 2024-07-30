const express = require('express')
const router = express.Router();
const fs = require('fs');
const { registerUser, getUserFirstName, deleteUserNameByID, editUserNameByID, loginUser } = require('../controllers/users');
const {auth} = require('../middlewares/auth');

router.post('/', registerUser);
  
router.get('/',getUserFirstName);

router.patch('/:id', editUserNameByID);

router.delete('/:id', deleteUserNameByID);


//Login
router.post('/login', loginUser);






module.exports = router;