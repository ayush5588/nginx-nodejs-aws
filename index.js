const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    console.log(req.headers);
    res.send('Hello Everyone');
});


app.get('/port',(req,res)=>{
    res.json({port: req.headers.host});

app.get('/about',(req,res)=>{
    res.send('Ayush Sinha');
});

app.listen(5000,(e)=>{
    if(e){
        console.log(`Error: ${e}`);
    }else{
        console.log(`App listening on port 5000`);
    }
});
