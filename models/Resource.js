const mongoose = require('mongoose');

const ResourceSchema  = new mongoose.Schema({
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
    data: Buffer,
    type: String,
    required : true
} ,
});
const Resource= mongoose.model('Resource',ResourceSchema);

module.exports = Resource;