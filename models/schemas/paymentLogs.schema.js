const mongoose=require('mongoose');


module.exports=new mongoose.Schema({
    amountType:{
        type:String,
        enum:["INCOME","EXPENSE"]
    },
    amount:{
        type:Number,
        required:true
    },
    usage:{
        type:String,
        required:true
    }
},{timestamps:true})