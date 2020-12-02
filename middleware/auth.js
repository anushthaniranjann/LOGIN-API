const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer',' ').trim();
        const decoded = jwt.verify( token,'heyythere')
        const user = await User.findOne({ _id: decoded._id,'tokens.token': token })

        if (!user) {
            throw new Error()
        }
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({ error: 'Please Authenticate' })
    }
}

module.exports = auth
 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM3M2FlMmE5NTE4ZDIwNzQxODcxOWEiLCJpYXQiOjE2MDY4OTIyNzh9.y_ThymEODsti6LS8CV13qDzDiuRbvkq3Ibwc8EA9BF0