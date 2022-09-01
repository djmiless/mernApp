const express = require('express');

// set dotenv
const dotenv = require('dotenv').config();

// errorHandler

const { errorHandler } = require('./middleware/errorMiddleware') 

// set port
const port = process.env.PORT;

// initialization 
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false})) 

//routes

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

// listen
app.listen(port, () => console.log(`server is listening on ${port}`) )