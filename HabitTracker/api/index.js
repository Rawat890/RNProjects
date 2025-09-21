const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const cors = require('cors');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://rohanrawat7508:Rohan7890/@cluster0.ilfiiql.mongodb.net/').then(()=>{
  console.log('Mongoose database connected')
}).catch((err)=>{
  console.log(err)
})

app.listen(PORT, ()=>{
  console.log('Listening on port')
})