const mongoose=require('mongoose');
module.exports=new mongoose.Schema({
    model:{
        type:String,
        required:true
    },
    vechicleNumber:{
        type:String,
        required:true,
        unique:true
    },
    isCommercial:{
        type:Boolean,
        default:false
    },
    image:{
        type:String,
        default:""
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{timestamps:true})