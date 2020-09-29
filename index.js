const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello Everyone');
});

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
