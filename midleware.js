const port = 3000

const express = require('express');
const app = express();

//custom middleware
function customMiddleware(req,res,next){;
   res.setHeader('Content-Type', 'application/json');

   if(!req.body.isAdmin){
      res.status(403)
      res.send(JSON.stringify({ error: "No puedes acceder a "+ req.url }))
   }
   else{
      next();
   }
   
 }

app.use(express.json());
app.use(customMiddleware)

app.get('/', function(req,res){
    res.status(403)
    res.send(JSON.stringify({ status: "middleware" }))
 });


 