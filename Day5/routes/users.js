const express = require('express')
const router = express.Router();
const fs = require('fs');
const { registerUser, getUserFirstName, deleteUserNameByID, editUserNameByID, loginUser } = require('../controllers/users');
const {auth,restrictedTo} = require('../middlewares/auth');

router.post('/', registerUser);
  
router.get('/',restrictedTo('Admin'),auth,getUserFirstName);

router.patch('/:id', editUserNameByID);

router.delete('/:id', deleteUserNameByID);


//Login
router.post('/login', loginUser);






module.exports = router;