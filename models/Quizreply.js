const mongoose = require('mongoose');

const QuizreplySchema  = new mongoose.Schema({
  reply :{
      type  : String,
      required : true
  } ,
  quizid :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
}
});
const Quizreply= mongoose.model('Quizreply',QuizreplySchema);

module.exports = Quizreply;