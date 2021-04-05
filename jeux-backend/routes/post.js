const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');

router.get('/',verify, async (req, res) =>{

    //res.send(req.user);
    const findUser = await User.findOne({_id: req.user});
    if(!findUser) return res.status(400).send('user is not found ')
    res.send(findUser);

    // res.json({
    //     posts: {
    //         title: 'my first post',
    //         description: 'random data you shouldnt access without a token'
    //     }
    // })
});



module.exports = router;