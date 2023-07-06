const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3001


app.listen(port, () => {
    console.log(`Server listening on http://localhost: ${port}`)
})



