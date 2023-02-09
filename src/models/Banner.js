const mongoose = require("mongoose");
const Banner = mongoose.Schema({
    title:String,
    subTitle:String,
    imageIcon:String
})
module.exports=mongoose.model("banner",Banner)