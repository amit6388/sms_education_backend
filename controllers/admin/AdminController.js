const InstructorRegisterSchema=require('../../models/admin/InstructorModel')
const CourseSchema=require("../../models/admin/Add_Course")

const createInstructor=async(req,resp)=>{
    try { 
        
        const name=req.body.name;
      
    const address=req.body.address; 
       const contact=req.body.contact;
       const email=req.body.email;
        const gender=req.body.gender;
         const dob=req.body.dob;
         const qualification=req.body.qualification;
       const degree=req.body.degree;
       const exp=req.body.exp;
     
        
       const usermail = await InstructorRegisterSchema.findOne({ email: email });
       console.log(usermail);
       if (usermail) {
         resp.status(404).json({
           code: 404,
           message: "user aleready exist....  ",
           data: [],
           error: false,
           status: false,
         });
       } else {
         let data = new InstructorRegisterSchema({
           
      name, 
      address,
      contact,
      email,
      gender,
      dob,
      qualification,
      degree,
      exp
         });
        
         let result = await data.save();
     
   
         resp.status(200).json({
           code: 200,
           message: "user  Register successfully",
   
           error: false,
           status: true,
         });
       }
     } catch (err) {
       console.log(err);
     }
}

const getInstructor=async(req,res)=>{

    let data = await InstructorRegisterSchema.find( );

    res.send(data);
}

const createCourse= async(req,resp)=>{
  try { 
    let img = req.file.filename;
    let title = req.body.title;
    let desc = req.body.desc;
    let level = req.body.level;
    let lessons = req.body.lessons;
    let duration = req.body.duration;
    let price = req.body.price;
    let rating = req.body.rating;
   
      
     const usermail = await CourseSchema.findOne({ title: title });
     console.log(usermail);
     if (usermail) {
       resp.status(404).json({
         code: 404,
         message: "Course aleready exist....  ",
         data: [],
         error: false,
         status: false,
       });
     } else {
       let data = new CourseSchema({
         
        img,
        title,
        desc,
        level,
        lessons,
        duration,
        price,
        rating,
       });
      
       let result = await data.save();
   
 
       resp.status(200).json({
         code: 200,
         message: "Course  Register successfully",
 
         error: false,
         status: true,
       });
     }
   } catch (err) {
     console.log(err);
   }
}
const getCourse=async(req,res)=>{

  let data = await CourseSchema.find( );

  res.send(data);
}
module.exports={createInstructor, getInstructor,createCourse,getCourse}