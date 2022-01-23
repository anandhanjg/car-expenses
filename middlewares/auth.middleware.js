const { jwtVerify } = require("../configs/jwt.config");
const {promisify}=require('util');
const { userModel } = require("../models");
let jwtVerifyPromise=promisify(jwtVerify);
const {getResponse}=require('../common/response')
module.exports.auth=async (req,res,next)=>{
    try{
        let token=req.headers['authorization'] || req.params.jwt || req.query.token;
        if(!token) throw "Token Required";
        token=token.replace('Bearer ','');
        let payload=await jwtVerifyPromise(token);
        let user=await userModel.findOne({username:payload.username});
        if(!user) throw "User Not Found";
        req.user=user;
        next();
    }catch(e){
        res.json(getResponse('002',{},e.message || e));
    }
    
}