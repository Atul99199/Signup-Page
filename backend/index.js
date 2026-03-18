const express =require('express');
const app = express();
const bodyparser = require('body-parser');
const AuthRouters = require('./Routes/AuthRouter');
const productrouter = require('./Routes/ProductRouter');
require('dotenv').config();
const cors = require('cors');
// zeti3dg92BXn21Hb
require('./Models/db');
const PORT = process.env.PORT || 8080;
app.get('/ping',(req,res)=>{
    res.send("POND");
})

app.use(bodyparser.json());
app.use(cors());
app.use('/auth',AuthRouters);
app.use('/products',productrouter);


app.listen(PORT,()=>{
 console.log(`Server is running on the port ${PORT}` )
})



