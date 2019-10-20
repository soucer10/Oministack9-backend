const express=require('express');
const sessioncontroller=require('./Controllers/SessionController')

const routes=express.Router();


routes.get('/',sessioncontroller.store)


module.exports=routes;