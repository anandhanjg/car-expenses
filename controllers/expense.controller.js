const { getResponse } = require("../common/response")
const { vehicleModel,paymentLogs } = require("../models")


module.exports={
    addLog:async (req,res)=>{
        try{
            res.json(getResponse('003',{}))
        }catch(err){
            res.json(getResponse('004',{},err.message || err))
        }
    },
    editLog:async (req,res)=>{
        try{
            res.json(getResponse('007',{}))
        }catch(err){
            res.json(getResponse('008',{},err.message || err))
        }
    },
    deleteLog:async (req,res)=>{
        try{
            res.json(getResponse('009',{}))
        }catch(err){
            res.json(getResponse('010',{},err.message || err))
        }
    },
    getLogs:async (req,res)=>{
        try{
            res.json(getResponse('005',{}))
        }catch(err){
            res.json(getResponse('006',{},err.message || err))
        }
    },
    getALog:async (req,res)=>{
        try{
            res.json(getResponse('005',{}))
        }catch(err){
            res.json(getResponse('006',{},err.message || err))
        }
    }
}