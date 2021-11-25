const http = require('http');
const express = require('express');
const port = 8080;

const app = express();

app.get('/',(req,res) =>{
    res.status(200).send('hello world');
})

app.listen(port, ()=>{console.log('server started');});