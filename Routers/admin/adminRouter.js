   
const express=require("express");
const Router=express.Router();
const {createInstructor,getInstructor,getCourse,createCourse}=require('../../controllers/admin/AdminController')
const course_upload=require('../../multer/admin/course_upload')
Router.route('/instructor').post(createInstructor);
Router.route('/instructor').get(getInstructor);
Router.route('/course').post(course_upload.single('img'),createCourse);
Router.route('/course').get(getCourse);

   module.exports=Router;