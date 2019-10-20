const express=require('express');
const routes=require('./routes');
const mongoose=require('mongoose');

const app=express();

mongoose.connect('mongodb+srv://soucer10:soucer10@cluster0-fwaym.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})

app.use(express.json());
app.use(routes)

app.listen(3333);

