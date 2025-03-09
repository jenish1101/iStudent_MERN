const userModel = require("../models/Home");

//for validation
const { validationResult } = require("express-validator");

const HomeController = async (req, res) => {
  try {
    const {
      id,
      name,
      number,
      email,
      gender,
      addr,
      dateOfBirth,
      course,
      country,
      state,
      city,
      hobbies,
    } = req.body;

    // console.log( id,
    //   name,
    //   number,
    //   email,
    //   gender,
    //   addr,
    //   dateOfBirth,
    //   course,
    //   country,
    //   state,
    //   city,
    //   hobbies,);
    

    //For Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // console.log(errors);
      return res.json(errors);
    }

    const EmailAlreadyUsed = await userModel.findOne({email});
    
    if(EmailAlreadyUsed){
      return res.json({message:"This email already used..."});
    }

    const newuser = await userModel.create({
      image: req.file.filename,
      id,
      name,
      number,
      email,
      gender,
      addr,
      dateOfBirth,
      course,
      country,
      state,
      city,
      hobbies,
    });
    return res.json({ message: "created...", newuser });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = HomeController;
