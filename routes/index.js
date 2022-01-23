const { authRouter } = require("./auth.route");
const vhRouter = require("./vehicle.route");
module.exports.setRoutes=(app,express)=>{
    app.get('/',(req,res)=>{
        res.json({message:"Welcome To Expense Server"});
    });
    app.use('/auth',authRouter(express));
    app.use('/vehicle',vhRouter)
}