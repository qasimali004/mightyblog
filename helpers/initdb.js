const mongoose = require("mongoose");

function initdb(){
    if(mongoose.connections[0].readyState){
        console.log("Already connected")
        return
    }
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    mongoose.connection.on('connected',() => {
        console.log("Connected to database")
    })
    mongoose.connection.on('error',(err) => {
        console.log("Error connecting to database:",err)
    })
}

export default initdb;