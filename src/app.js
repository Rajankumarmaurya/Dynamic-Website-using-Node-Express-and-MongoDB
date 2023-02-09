const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('strictQuery',true);

const port =8000;

const routes=require('./routes/main');
const Detail = require("./models/Detail")
const Slider = require("./models/slider")
const Service=require("./models/Service")
const Banner = require("./models/Banner")

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/static" ,express.static("public"))


app.use('',routes)
app.set('view engine', 'hbs');
app.set("views","views")
hbs.registerPartials("views/partials")

// db connection


mongoose.connect("mongodb://localhost:27017/website_tut",{
  
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
 .then(()=>{
    console.log(`connection successfull`)

//    Banner.create([
//     {
//         title:"Provide the best work",
//         imageIcon:"/static/images/s11.png",
//         subTitle:"That work which i provide you cant get anywhere where you want"

//     }
//    ])
             
    // Service.create([
    //     {
    
    //         icon:'fab fa-accusoft',
    //         title:'Provide the best course',
    //         description:'We provide best coursee that helps us student in placement and studies',
    //         linkText:'http://www.google.com',
    //         link:'Check'
    //     },
    //     {
    
    //         icon:'fa-brands fa-usps',
    //         title:'Learn Project',
    //         description:'We provide best coursee that helps us student in placement and studies',
    //         linkText:'http://www.google.com',
    //         link:'Learn'
    //     },
    // ])
    


    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://cdn.dribbble.com/userupload/2849594/file/original-3a41b889fe9dfc7e2dea83886b3455d5.png?compress=1&resize=752x",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact"
    //         },
    //     ]
    // })

    // Slider.create([
    //     {
    //         title:"Learn java in very easy manner",
    //         subTitle:"Java is the one of the best programming language",
    //         imageUrl:"/static/images/s2.jpg"
    //     },
    //     {
    //         title:"What is Phyton",
    //         subTitle:"It is alose the best program language used in the most Ai",
    //         imageUrl:"/static/images/s1.jpg"
    //     },
    //     {
    //         title:"What is web development",
    //         subTitle:"This is the best skill which is require every human ",
    //         imageUrl:"/static/images/s3.jpg"
    //     },
    //    ])

// service detail

    
})
.catch((err)=>{
    console.log(`no connection`);
})


app.listen(port,()=>{
    console.log(`server is running on the ${port}`)
})