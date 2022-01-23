module.exports.setMiddlwares=(app,express)=>{
    app.use(express.json({limit:'150mb'}));
    app.use(express.urlencoded({extended:false}));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization, oauth-token, Oauth-token");
        next();
    });

    app.use(function(req,res,next){
        req.ip=req.connection.remoteAddress;
        next();    
    });    

    app.set('views','./views');
    app.set('view engine','ejs');
    app.use(express.static('./uploads'));
    app.use(express.static('./public'));
}