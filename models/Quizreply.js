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
},
quiz_id:{
  type:String,

},
reply_id:{
  type:String,
  
}
});
const Quizreply= mongoose.model('Quizreply',QuizreplySchema);

module.exports = Quizreply;