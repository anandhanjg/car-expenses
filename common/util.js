const {Types:{ObjectId}}=require("mongoose");
module.exports={
    genAgg:({page,size,sortBy,order})=>{
        let agg=[];
        
        if(sortBy){
            agg.push({
                $sort:{
                    [sortBy]:order?order:1
                }
            });
        }
        
        if(typeof page =='number'  && typeof size=='number'){
            agg.push({
                $skip:page*size-size
            });
        }

        if(typeof size=='number'){
            agg.push({
                $limit:size
            });
        }        
        return agg;
    },
    getRootDir:()=>(__dirname.replace('/common','')),
    isEmptyObject:(obj)=>(Object.keys(obj).length==0),
    getObjectId:(_id)=>(_id?ObjectId(_id):ObjectId()),
}