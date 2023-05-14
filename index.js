const express=require('express'); 
const app=express();
const cors=require('cors')
const PORT=process.env.PORT || 8000;
const   adminRouter=require('./Routers/admin/adminRouter')
const  StudentRoute=require('./Routers/students/StudentRoute'); 
app.use(express.json())
app.use(cors()
        ) ;
require('./config/config'); 
app.use("/api",adminRouter)    
app.use('/api',StudentRoute)
app.use("/coursepic", express.static("./assets/admin/course_upload"));



app.listen(PORT, () => {
    console.log("Hi Amit your server is running at  this :" + PORT)
})







