const express = require('express')
require('./db/db')
const userRouter = require('./routes/user')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
// res.status(503).send('Site is currently down. Check bck soon')
// })

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'heyythere', { expiresIn: '1 year' })
    console.log(token)

    const data = jwt.verify(token, 'heyythere')
    console.log(data)
}

myFunction()