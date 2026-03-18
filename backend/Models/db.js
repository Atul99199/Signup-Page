const mongose = require('mongoose');

const mongo_url=process.env.MONGO_CONN;

mongose.connect(mongo_url)
.then(()=>{
    console.log("mongoose Connected...")
}).catch((err)=>{
   console.log("mongoDB Connection..",err);
})