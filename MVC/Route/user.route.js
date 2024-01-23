
const {Router} = require('express');
const user = require('../Controller/user.controller');

const userRoute = Router();


userRoute.get('/',user.get)

userRoute.post("/register",user.post)



module.exports ={
    userRoute
}
