const express = require('express')
require('./db/db')
const userRouter = require('./routes/user')
const jwt = require('jsonwebtoken')


const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port' + port)
})