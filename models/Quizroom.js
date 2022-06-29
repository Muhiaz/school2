const mongoose = require('mongoose');

const QuizroomSchema  = new mongoose.Schema({
  name :{
      type  : String,
      required : true
  } ,
  level :{
    type  : String,
    required : true
} ,
 subject :{
    type  : String,
    required : true
} ,
description :{
    type  : String,
    required : true
} ,
rclass :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
},
file :{
    type:String,
    required : true
}
});
const Quizroom= mongoose.model('Quizroom',QuizroomSchema);

module.exports = Quizroom;