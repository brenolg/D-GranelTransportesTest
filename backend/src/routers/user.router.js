const express = require('express');
const { getAllUsers, deleteUser, updateUser, createUser, searchUser} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/search', searchUser);
userRouter.delete('/:id', deleteUser);
userRouter.patch('/:id', updateUser);
userRouter.post('/register', createUser);

module.exports = userRouter;