const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose= require('mongoose');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3003"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Import Routes
const authRoute= require('./routes/auth');
const postRoute= require('./routes/post');

//DB config
dotenv.config();
//connect to DB
mongoose.connect( process.env.DB_CONNECT , { useNewUrlParser: true }, () => console.log('connected to db!'))


//Middleware
app.use(express.json());



//Route Middlweares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(2000, () => console.log('jeux server is up and running'));
