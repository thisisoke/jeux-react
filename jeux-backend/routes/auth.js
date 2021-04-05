const router = require('express').Router();
const User = require('../model/User');
const {registerValidation} = require('../validation');




router.post('/register', async (req,res) => {

    //Validating Data from User Before User is made
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if The user is already in the Database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exisits')
   
    //Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }

});







module.exports = router;