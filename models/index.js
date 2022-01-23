const mongoose=require('mongoose');
const { collections } = require('../common/const');
const userSchema=require('./schemas/user.schema');
const vehicleSchema=require('./schemas/vehicle.schema');
const paymentSchema=require('./schemas/paymentLogs.schema');

module.exports={
    userModel:mongoose.model(collections.users,userSchema),
    vehicleModel:mongoose.model(collections.vechiles,vehicleSchema),
    paymentLogs:mongoose.model(collections.paymentLogs,paymentSchema)
}