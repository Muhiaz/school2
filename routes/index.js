const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require("../config/auth.js")

//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
router.get('/dashboard',ensureAuthenticated,(req,res)=>{
res.render('dashboard',{
user: req.user
});
})
router.get('/form1',ensureAuthenticated,(req,res)=>{
res.render('form1',{
user: req.user
});
})
router.get('/form2',ensureAuthenticated,(req,res)=>{
res.render('form2',{
user: req.user
});
})
router.get('/form3',ensureAuthenticated,(req,res)=>{
res.render('form3',{
user: req.user
});
})
router.get('/form4',ensureAuthenticated,(req,res)=>{
res.render('form4',{
user: req.user
});
})
router.get('/online',ensureAuthenticated,(req,res)=>{
res.render('online',{
user: req.user
});
})
router.get('/facebook',ensureAuthenticated,(req,res)=>{
res.render('facebook',{
user: req.user
});
})
router.get('/youtube',ensureAuthenticated,(req,res)=>{
res.render('youtube',{
user: req.user
});
})
router.get('/profile',ensureAuthenticated,(req,res)=>{
res.render('profile',{
user: req.user
});
})
router.get('/grade1',ensureAuthenticated,(req,res)=>{
res.render('grade1',{
user: req.user
});
})
router.get('/grade2',ensureAuthenticated,(req,res)=>{
res.render('grade2',{
user: req.user
});
})
router.get('/grade3',ensureAuthenticated,(req,res)=>{
res.render('grade3',{
user: req.user
});
})
router.get('/grade4',ensureAuthenticated,(req,res)=>{
res.render('grade4',{
user: req.user
});
})
router.get('/class5',ensureAuthenticated,(req,res)=>{
res.render('class5',{
user: req.user
});
})
router.get('/class6',ensureAuthenticated,(req,res)=>{
res.render('class6',{
user: req.user
});
})
router.get('/class7',ensureAuthenticated,(req,res)=>{
res.render('class7',{
user: req.user
});
})
router.get('/class8',ensureAuthenticated,(req,res)=>{
res.render('class8',{
user: req.user
});
})
router.get('/accounts',ensureAuthenticated,(req,res)=>{
res.render('accounts',{
user: req.user
});
})
module.exports = router; 