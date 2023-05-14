   
const express=require("express");
const Router=express.Router();
const {createSt,getSt,putSt,delSt}=require('../../controllers/students/StudentController')

Router.route('/students').post(createSt);
Router.route('/students').get(getSt);
Router.route('/students/:_id').put(putSt);
Router.route('/students/:_id').delete(delSt);


   module.exports=Router;