const mongoose = require('mongoose');
const mongoURI='mongodb://Purnendu:123454321@ac-s8elzmg-shard-00-00.idf9uxn.mongodb.net:27017,ac-s8elzmg-shard-00-01.idf9uxn.mongodb.net:27017,ac-s8elzmg-shard-00-02.idf9uxn.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-4d5szj-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongoDB=async ()=>{
   await mongoose.connect(mongoURI,{useNewurlParser:true},(err,res)=>{
        if(err)
            console.log("---",err);
        else
        console.log("connected");
    });
}
module.exports=mongoDB;