const express=require('express');
const router=express.Router();
const userController=require('../controllers/user');
const passport=require('passport');
console.log("hello users router");
router.get('/signUp',userController.signUp);
router.get('/signIn',userController.signIn);
router.get('/profile',passport.checkAuthentication,userController.profile);
router.get('/signOut',userController.signOut);
router.post('/create',userController.create);
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect:'/users/signIn'}
),userController.createSession);



module.exports=router;