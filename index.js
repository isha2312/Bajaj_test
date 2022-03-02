const express= require("express");
const bodyParser = require('body-parser');
const app=express();
app.use(express.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());

const port=process.env.PORT;
app.post("/bfhl",async function(req, res){
    const data=await req.body.data;
    const alphabets=[];
    const numbers=[];
    for(items in data){
        if(isNaN(data[items]))
        {
            alphabets.push(data[items]);
        }
        else{
            numbers.push(data[items]);
        }
    }

    const obj={
        "is_success": true,
        "user_id": "sahilmallik_1910991074",
        "email" : "john@xyz.com",
        "roll_number":"ABCD123",
        "numbers": numbers,
        "alphabets": alphabets
       }
       res.send(obj);
});

app.listen(port,function(){
    console.log("Server started");
})