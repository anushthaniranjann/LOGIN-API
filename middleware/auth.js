const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer','')
        const decoded = jwt.verify(token, 'heyythere')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM2NDA5ZmE3YjI2MDExNzA4NDVhODMiLCJpYXQiOjE2MDY4ODI4MjZ9.UI9eDVKaxoXWhISNVjI0pVr1XwyyygMV-hqLN1xqsZQ