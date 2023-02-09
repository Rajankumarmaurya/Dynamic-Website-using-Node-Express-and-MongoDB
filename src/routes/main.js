
const { response } = require("express");
const express = require("express");
const routes = express.Router();
const Contact =require("../models/Contact")

const Detail = require("../models/Detail");
const Service = require("../models/Service");
const slider = require("../models/slider");
const Banner=require("../models/Banner");


routes.get("/",async (req,res)=>{
  const details= await Detail.findOne({"_id":"63cd6b83acecc2e12b23ecca"})
  const slides = await slider.find();
  const services= await Service.find();
  const banners =await Banner.find();
//   console.log(banners)
  
//   console.log(slides)
//   console.log(details)
   res.render("index",{
      details:details,
      slides:slides,
      services:services,
      banners:banners
      
   })
})
routes.get("/gallery",async(req,res)=>{
   const details= await Detail.findOne({"_id":"63cd6b83acecc2e12b23ecca"})
   res.render("gallery",{
      details:details
   })
})

// PROCESS CONTACT FORM KAISE KRE YE SB HAI
routes.post("/process-contact-form", async(request,response)=>{
   console.log("this form is submit")
   console.log(request.body)

   // save the data in db
try{
  const data= await Contact.create(request.body);
  console.log(data)  
  response.redirect("/")

}catch(e)
{
   console.log(e)
  response.redirect("/")
}

})
module.exports=routes