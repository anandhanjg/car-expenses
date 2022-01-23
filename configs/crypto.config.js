const crypto=require('crypto');

module.exports={
    encrypt:(cipherCode,password)=>{
        hash=crypto.pbkdf2Sync(password,cipherCode,1000,64,'sha512').toString('hex');
        return hash;
    },
    salt:()=>{
        return crypto.randomBytes(16).toString('hex');
    }
}