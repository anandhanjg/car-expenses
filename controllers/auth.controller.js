const { getResponse } = require("../common/response")
const {encrypt,salt}=require('../configs/crypto.config');
const {userModel}=require('../models')
const {jwtSign}=require('../configs/jwt.config');
const {promisify}=require('util');
const jwtSignPromise=promisify(jwtSign);

module.exports={
    register:async (req,res)=>{
        try{    
            const {username,name,password}=req.body;
            if(!username) throw "User Name Required";
            if(!name) throw "Name Required";
            if(!password) throw "Password Required";

            let user=await userModel.findOne({username});

            if(user) throw "User Already Exists with this username";
            let cipher=salt();
            let hash=encrypt(cipher,password);

            await new userModel({cipher,hash,username,name}).save()
            res.json(getResponse('003',{},"Registered Successfully"));
        }catch(err){
            res.json(getResponse('004',{},err.message || err));
        }
    },
    signin:async (req,res)=>{
        try{
            const {username,password}=req.body;
            if(!username) throw "User Name Required";
            let user=await userModel.findOne({username});
            if(!user) throw "User Not Found";
            if(user.hash!==encrypt(user.cipher,password)) throw "Incorrect Password";
            let payload={username,name:user.name,_id:user._id};
            let token=await jwtSignPromise(payload);
            res.json(getResponse('001',{token},'Authenticated Successfully'));
        }catch(err){
            res.json(getResponse('002',{},err.message || err));
        }
    },
    profile:(req,res)=>{
        req.user=JSON.parse(JSON.stringify(req.user));
        delete req.user.hash;
        delete req.user.cipher;
        delete req.user.tokens;
        res.json(getResponse('005',req.user,"Profile Sent"));
    }
}