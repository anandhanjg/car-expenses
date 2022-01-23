const { auth } = require('../middlewares/auth.middleware');
const paymentController=require('../controllers/expense.controller');

const pRouter=require('express').Router();

pRouter.get('/',(req,res)=>{res.json({message:"Payment Log Routes"})});


pRouter.use(auth);

pRouter.post('/add',paymentController.addLog);
pRouter.post('/edit',paymentController.editLog);
pRouter.post('/delete',paymentController.deleteLog);
pRouter.post('/get-logs',paymentController.getLogs);
pRouter.get('/get-log',paymentController.getALog);

module.exports=pRouter;
