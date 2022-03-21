const express = require('express'),
      cors = require('cors');
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1 style="color: red;">Hi All, my name is &copy; mohamed mostafa</h1>')
})

app.listen(4000, () => {
    console.log('http://localhost:4000')
})