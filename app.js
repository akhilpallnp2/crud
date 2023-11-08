const express = require('express');
const app = express();
const BookRoutes = require('./Routes/BookRoutes');
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/Book',BookRoutes)






module.exports = app;