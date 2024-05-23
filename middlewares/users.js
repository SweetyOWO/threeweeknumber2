const users = require('../models/users');

const findAllUsers = async (req, res, next) => {
    console.log('GET /users')
    req.usersArray = await users.find({});
    next()
}

module.exports = findAllUsers
