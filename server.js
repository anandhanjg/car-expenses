const express=require('express');
const { setMiddlwares } = require('./middlewares');
const { setRoutes } = require('./routes');
const mongoConnect=require('./configs/mongoose.config');


const app=express();

setMiddlwares(app,express);
setRoutes(app,express);


mongoConnect.connection.on('connected',()=>{
    app.listen(4000,()=>{
        console.table({
            name:"Car Expense Server",
            Description:"Log Monthly Car Expenses",
            Status:"Alive",
            Port:4000,
            Author:"Anandhan"})
    })
})

module.exports=app;

