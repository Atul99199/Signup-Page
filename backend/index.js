const express =require('express');
const app = express();
const bodyparser = require('body-parser');
const AuthRouters = require('./Routes/AuthRouter.js');
const productrouter = require('./Routes/ProductRouter.js');
const todoRouter = require('./Routes/TodoRouter');
require('dotenv').config();
const cors = require('cors');
// zeti3dg92BXn21Hb
require('./Models/db');
const PORT = process.env.PORT || 8080;
app.get('/ping',(req,res)=>{
    res.send("PONG");
})

app.use(bodyparser.json());
app.use(cors());
app.use('/auth',AuthRouters);
app.use('/products',productrouter);
app.use('/todos', todoRouter);

app.listen(PORT,()=>{
 console.log(`Server is running on the port ${PORT}` )
})




