const http = require('http');
const express = require('express');
const port = 8080;

const app = express();
const productRouter = require('./routers/productRouter.js');

app.get('/',(req,res) =>{
    res.status(200).send('hello world');
})

//it will route all http methods
app.all('route all', (req, res) =>{
    res.status(200).send('routed all');
})

//specify which router to use
app.use('/products', productRouter);

app.listen(port, ()=>{console.log('server started, listening at: '+port);});