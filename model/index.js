// express 
// express-handlerbars
// mongoose
// body-parser
// nodemon
const mongoose = require("mongoose",);//used to connect mongodb to nodejs

mongoose.connect("mongodb://localhost:27017/Anushka",{ useNewUrlParser: true,  useUnifiedTopology: true }, (error)=>{
    if(!error){
        console.log("Success connected");
    }
    else{
        console.log("Error")
    }
});

//const Course = require("./courses.model"); 