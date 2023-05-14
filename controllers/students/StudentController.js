const Student_RegisterSchema=require("../../models/students/StudentModel") 
const createSt=async(req,resp,next)=>{
    try { 
         const regno=req.body.regno; 
         const name=req.body.name;
        const fname=req.body.fname; 
     const address=req.body.address; 
        const contact=req.body.contact;
        const email=req.body.email;
         const gender=req.body.gender;
          const dob=req.body.dob;
          const admdate=req.body.admdate;
        const refby=req.body.refby;
      
         
        const usermail = await Student_RegisterSchema.findOne({ email: email });
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
          let data = new Student_RegisterSchema({
            regno,
       name,
       fname,
       address,
       contact,
       email,
       gender,
       dob,
       admdate,
       refby
          });
          //  const token=await data.generatAuthToken()
          //    console.log(token)
          let result = await data.save();
          //resp.send(result);
    
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
const getSt=async(req,res)=>{
    let data = await Student_RegisterSchema.find();

    res.send(data);
   
}

const putSt=async(req,res)=>{
    try {

        const regno=req.body.regno; 
        const name=req.body.name;
       const fname=req.body.fname; 
    const address=req.body.address; 
       const contact=req.body.contact;
       const email=req.body.email;
        const gender=req.body.gender;
         const dob=req.body.dob;
         const admdate=req.body.admdate;
       const refby=req.body.refby;
        
 
       let data = await Category_Schema.updateOne(
        req.params,
        { $set:   {
            regno:regno,
            name:name,
            fname:fname,
            address:address,
            contact:contact,
            email:email,
            gender:gender,
            dob:dob,
            admdate:admdate,
            refby:refby
          
        } }

    );
         res.send(result);
 
     } catch (err) {
         console.log(err)
     }
   
}
const delSt=async(req,res)=>{
    try {
        console.log(req.params)
        let data = await Student_RegisterSchema.deleteOne(req.params);
        res.send(data);
    } catch (err) {
        console.log(err)

    }
   
}
module.exports={createSt, getSt,putSt,delSt}