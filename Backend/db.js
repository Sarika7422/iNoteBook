const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&tls=false&readPreference=primary";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("Connect to mongo db successfully.");
}

module.exports=connectToMongo;