   
const express=require("express");
const Router=express.Router();
const {createInstructor,getInstructor,getCourse,createCourse,deleteCourse,deleteInstructor,createEnquiry,getEnquiry,deleteEnquiry}=require('../../controllers/admin/AdminController')
const course_upload=require('../../multer/admin/course_upload')
Router.route('/instructor').post(createInstructor);
Router.route('/instructor').get(getInstructor);
Router.route('/instructor/:contact').delete(deleteInstructor);
Router.route('/course').post(course_upload.single('img'),createCourse);
Router.route('/course').get(getCourse);
Router.route('/course/:contact').delete(deleteCourse);
Router.route('/enquiry').post(createEnquiry);
Router.route('/enquiry').get(getEnquiry);
Router.route('/enquiry/:contact').delete(deleteEnquiry);

   module.exports=Router;