const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/StudentApp");

const dotenv = require('dotenv');
dotenv.config();
const MONGO_CONNECT = process.env.MONGO_CONNECTION;
mongoose.connect(MONGO_CONNECT);


const HomeSchema = mongoose.Schema({
    id : {
        type : String,
        require : true,
    },
    name : {
        type : String,
        require : true,
        lowercase : true,
        trim : true,
    },
    number : {
        type : Number,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    addr : {
        type : String,
        require : true, 
    },
    gender :  {
        type : String,
        require : true, 
    },
    dateOfBirth : {
        type : Date,
        require : true,
    },
    course :  {
        type : String,
        require : true, 
    },
    country :  {
        type : String,
        require : true, 
    },
    state :  {
        type : String,
        require : true, 
    },
    city :  {
        type : String,
        require : true, 
    },
    image :  {
        type : String,
        require : true, 
    },
    school :  {
        type : String,
        require : true, 
    },
    address:  {
        type : String,
        require : true, 
    },
    hobbies: [String],
})

module.exports = mongoose.model("student_formdata",HomeSchema);     //for home page data store



