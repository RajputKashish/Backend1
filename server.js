//Building My first server ever....
const express= require('express');
const  app=express();

// //build object to pass request body 
const bodyParser=require("body-parser");
// //parsing json data
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("Hello HandSome Bro")
});
app.put("/api",(req,res)=>{
        response.send("My self Kashish Rajput");
});
app.delete("/delete",(req,res)=>{
    response.send("Item deleted");
});
app.listen(process.env.port,()=>{
    console.log(`Example app listening on port ${port}`)
})