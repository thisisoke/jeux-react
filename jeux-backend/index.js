const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose= require('mongoose');

//connect to DB
dotenv.config();

mongoose.connect( process.env.DB_CONNECT , { useNewUrlParser: true }, () => console.log('connected to db'))

 //Import Routes
const authRoute= require('./routes/auth');

//Route Middlweares

app.use('/api/user', authRoute);

app.listen(2000, () => console.log('jeux server is up and running'));
