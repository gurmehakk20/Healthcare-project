

const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name:{
        type : String , 
        require : [ true , "please add your name"],
    },
    email:{
        type : String , 
        require : [ true , "please add your last name"],
    },
    speciality:{
        type : String , 
        require : [ true , "please add your speciality"],
    },
    phoneNumber:{
        type : Number , 
        require : [ true , "please add your phone number"],
    },
    experience:{
        type : Number , 
        require : [ true , "please add your experience"],
    },
    speciality:{
        type : String , 
        require : [ true , "please add your speciality"],
    },
    password:{
        type : String,
        require : [ true , "please add your passwprd"],
    }
},
{
    timestamps : true ,
});
module.exports = mongoose.model("Doctor" , doctorSchema);