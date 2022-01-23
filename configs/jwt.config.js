require('dotenv').config();
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=process.env;
module.exports.jwtSign=(payload,option,cb)=>{
    if(!option)
        option={expiresIn:"1000d"}
    jwt.sign(payload,JWT_SECRET,option,(err,token)=>{
        if(err) return cb(err.message);
        else return cb(null,token);
    });
}

module.exports.jwtVerify=(token,cb)=>{
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err)
            return cb(err.message);
        else
            return cb(null,payload);
    })
}