const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course")
router.get("/list",(req,res)=>{
//Settings
//  var Course = new CourseModel();
//  course.CourseName = "NodeJS";
//  course.CourseId = "2";
//  course.save();

    CourseModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.send("Course Controller")
        }
        else{
            res.send("error")
        }
    })
  
});
module.exports = router;