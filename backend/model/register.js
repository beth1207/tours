const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema(
    {
   name:{
        type:String,
        required:true,

   },
   location:{
    type:String,
   },
   servicesOffered:{
    type:String,
   },
   spaceAvailable:{
    type:String,
   },
   daysTime:{
    type:String
   },
   importantNotice:{
    type:String
   },
   createdAt:{
    type:Date,
    default:Date.now
   }

})

module.exports= mongoose.model("RegisterClient",registerSchema)