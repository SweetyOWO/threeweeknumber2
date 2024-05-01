const userRouter = require('express').Router();
const findAllUsers = require('../middlewares/user')
const sendAllUsers = require('../controllers/users');

userRouter.get('/users', findAllUsers, sendAllUsers);

module.exports = userRouter;