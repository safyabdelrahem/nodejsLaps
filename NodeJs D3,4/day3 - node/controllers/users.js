
const express = require('express');
const usersModal = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    let user = req.body;
    try {
        
        let newUser = await usersModal.create(user);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    
};

const getUserFirstName = async (req, res)=>{
    try {
        const firstNames = await usersModal.find({}, { 'firstName': true, '_id': false }); 
        res.status(200).json({ date: firstNames });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const editUserNameByID = async (req, res) => {
    const userId = req.params.id; 
    const updatedUserData = req.body;

    try {
        const editUser = await usersModal.findByIdAndUpdate(userId , updatedUserData);

        if (editUser) {
            res.status(200).json({message: 'User was edited successfully', data:{editUser}});
        } else {
            res.status(404).json({ message: 'User not found'});
        }

    }catch (error) {
        res.status(400).json({ message: error.message});
    }
}

const deleteUserNameByID = async (req, res) => {
    const userId = req.params.id; 

    try {
        const deletedUser = await usersModal.findByIdAndDelete(userId);

        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully'});
        } else {
            res.status(404).json({ message: 'User not found'});
        }

    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    let { email, password } = req.body;

    if (!email || !password) {
        return res.status(403).json({ message: 'You must provide an email and password.' });
    }

    let user = await usersModal.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: 'Not Found.' });
    }

    let isvalid = await bcrypt.compare(password, user.password);
    if (!isvalid) {
        return res.status(401).json({ message: 'Invlaid email or password.' });
    }

    const token = jwt.sign({ data: { email: user.email , id:user._id} }, 'this_is_my_token_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token: token });

}



module.exports = { registerUser, getUserFirstName, deleteUserNameByID ,editUserNameByID ,loginUser};
