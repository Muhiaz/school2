const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const {ensureAuthenticated} = require("../config/auth.js");
const Resource = require("../models/Resource.js");
const db = mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
router.post('/addresource',(req,res)=>{
   var newFile = new Resource({
    name: req.body.name,
    subject: req.body.subject,
    rclass: req.body.rclass,
    level : req.body.level,
    description : req.body.description,
    file : req.body.file,

  });

   newFile.save()
                    .then((value)=>{
                        console.log(value);
                        req.flash('success_msg','You have added the Resource successfully!')
                    res.redirect('/form1');
                    }).catch(value=> console.log(value));


})

router.get('/dashboard',ensureAuthenticated,(req,res)=>{
res.render('dashboard',{
user: req.user
});
})
router.get('/blog',(req,res)=>{
res.render('blog');
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

router.get('/pmaths',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/pmaths',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
    
})
router.get('/penglish',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/penglish',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/pkiswahili',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/pkiswahili',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/pcre',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/pcre',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/science',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/science',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/smaths',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/smaths',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/senglish',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/senglish',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/skiswahili',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/skiswahili',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/scre',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/scre',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/biology',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/biology',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/business',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/business',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/chemistry',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/chemistry',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/physics',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/physics',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/geography',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/geography',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/computer',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/computer',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/agriculture',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/agriculture',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
router.get('/history',ensureAuthenticated,(req,res)=>{
    Resource.find().then(result =>{
        console.log(result);
        res.render('resources/history',{user: req.user,resources : result})
    }).catch(error =>console.log(result));
})
module.exports = router; 