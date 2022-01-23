const authController = require("../controllers/auth.controller");
const { auth } = require("../middlewares/auth.middleware");

module.exports.authRouter=(express)=>{
    let authRouter=express.Router();
    authRouter.get('/',(req,res)=>{
        res.json({message:"Auth Routes"});
    });
    authRouter.post('/register',authController.register);
    authRouter.post('/signin',authController.signin);


    authRouter.use(auth);
    authRouter.get('/profile',authController.profile);
    return authRouter;
}