const express = require('express');

const PORT = process.env.PORT || 3001

const app = express()


app.listen(3001, () => {
    console.log(`Server sterting on port ${PORT}`)
})

app.get('/api', (req, res) => {
    res.json({
        message: "hello from backend express.js"
    })
})