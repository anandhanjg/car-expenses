const vhRouter=require('express').Router();
const vehicleController=require('../controllers/vehicle.controller');
const { auth } = require('../middlewares/auth.middleware');

vhRouter.get('/',(req,res)=>{res.json({message:"Vehicle Routes!!!"})})

vhRouter.use(auth);

vhRouter.post('/add',vehicleController.addVehicle);
vhRouter.put('/edit',vehicleController.editVehicle);
vhRouter.post('/get-vehicles',vehicleController.getVehicles);
vhRouter.delete('/delete-vehicles',vehicleController.deleteVehicle);
vhRouter.get('/get-vehicle',vehicleController.getVehicle);

module.exports=vhRouter;