const { body } = require("express-validator");

const validationSchema = [

  body("id")
    .isLength({ min: 3 }).withMessage("Id Value must be atleast 3 characters long (E123)."),

  body("name")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long")
    .custom((value) => {
      // Check if the name contains only characters
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        throw new Error("Name must contain only characters");
      }
      return true;
    }),

  body("number")
    .isMobilePhone().withMessage("Number must be a valid phone number")
    .isLength({ min : 10 }).withMessage("Number Must Be Greater Than 10 Digits")
    .isLength({ max : 10 }).withMessage("Number Can't Greater Than 10 Digits"),

  body("email")
    .isEmail().withMessage("Email must be valid"),

  body("gender")
    .isIn(["male", "female", "other"]).withMessage("Gender must be either male, female, or other"),

  body("course") 
    .isLength({ min: 1 }).withMessage("Course is required"),

  body("country")
    .isLength({ min: 1 }).withMessage("Country is required"),

  body("state")
    .isLength({ min: 1 }).withMessage("State is required"),

  body("city")
    .isLength({ min: 1 }).withMessage("City is required"),

  body("hobbies")
    .isArray()
    .withMessage("Check Atleast Two Hobbies")
    .custom((value) => {
      if (!value.length) {
        throw new Error("Hobbies cannot be empty");
      }
      return true;
    }),

  body("image").custom((value, { req }) => {
    // Check if the image file exists in the request
    if (!req.file) {
      throw new Error("Image is required");
    }
    return true;
  }),

];

module.exports = validationSchema;

