const { body, validationResult } = require("express-validator");


const validationSchema = [

    body("name")
      .isLength({ min: 3 })
      .withMessage("Name Length Should Be More Than 3")
      .custom((value) => {
        // Check if the name contains only characters
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          throw new Error("Name must contain only characters");
        }
        return true;
      }),

    body("email")
      .isLength({ min: 1 })
      .withMessage("Email Can't Be Empty")
      .isEmail()
      .withMessage("Email Not Valid"),
      
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password Length Should Be More Than 5"),
];

module.exports = validationSchema;