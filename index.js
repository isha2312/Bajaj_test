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
        "user_id": "isha_sahni_23122001",
        "email" : "isha0577.cse19@chitkara.edu.in",
        "roll_number":"1910990577",
        "numbers": numbers,
        "alphabets": alphabets
       }
       res.send(obj);
});

app.listen(port,function(){
    console.log("Server started");
})
