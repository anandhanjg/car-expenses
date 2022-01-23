const mongoose=require('mongoose');
module.exports=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    cipher:{
        type:String,
        required:true
    },
    tokens:[String],
    hash:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
    timeseries:true
})