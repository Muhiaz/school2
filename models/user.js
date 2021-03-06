const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
  name :{
      type  : String,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
 county :{
    type  : String,
    required : true
} ,
level :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,
role :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
},
classroom :{
    type  : String,
    required : true
} 
});
const User= mongoose.model('User',UserSchema);

module.exports = User;