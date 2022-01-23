const { getResponse } = require("../common/response");
const { getObjectId, genAgg } = require("../common/util");
const { vehicleModel } = require("../models")


module.exports={
    addVehicle:async (req,res)=>{
        try{
            await new vehicleModel(req.body).save();
            res.json(getResponse('003',{},"Vehicle Added Successfully"))
        }catch(err){
            res.json(getResponse('004',{},err.message || err))
        }
    },
    editVehicle:async (req,res)=>{
        try{
            let _id=req.body._id;
            if(!_id) throw "Id Required";
            delete req.body._id;
            let d=await vehicleModel.updateOne({_id},{$set:req.body});
            if(d.matchedCount==0) throw "Vehicle Not Found";
            if(d.modifiedCount==0) throw "Already Modified";
            res.json(getResponse('007',{},"Vehicle Edited"))
        }catch(err){
            res.json(getResponse('008',{},err.message || err))
        }
    },
    deleteVehicle:async (req,res)=>{
        try{
            let _id=req.body._id;
            let d=await vehicleModel.deleteOne({_id});
            if(d.deletedCount==0) throw "Data Not Found";
            res.json(getResponse('009',{},"Vehicle Deleted"))
        }catch(err){
            res.json(getResponse('010',{},err.message || err))
        }
    },
    getVehicles:async (req,res)=>{
        try{
            
            let agg=[
                {
                    $match:{
                        owner:getObjectId(req.user._id)
                    }
                }
            ]; 
            agg.push(...genAgg(req.body));
            let vehicles=await vehicleModel.aggregate(agg);
            res.json(getResponse('005',{vehicles}))
        }catch(err){
            res.json(getResponse('006',{},err.message || err))
        }
    },
    getVehicle:async (req,res)=>{
        try{
            if(!req.query._id) throw "Id Required";
            let vehicle=await vehicleModel.findOne({_id:getObjectId(req.query._id)});
            res.json(getResponse('005',{vehicle}))
        }catch(err){
            res.json(getResponse('006',{},err.message || err))
        }
    }
}