const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/StudentApp");

const dotenv = require('dotenv');
dotenv.config();
const MONGO_CONNECT = process.env.MONGO_CONNECTION;
mongoose.connect(MONGO_CONNECT);


const studentSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
        lowercase : true,
        trim : true,
    },
    email : {
        type  : String,
        unique : true,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    date:{
        type : Date,
        default : Date.now(),
    }
})

module.exports = mongoose.model("students",studentSchema);