import JWT from "jsonwebtoken";
//import userModel from "../models/userModel.js";

//Protected Routes token based
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    
    next();
  } catch (error) {
    console.log(error);
  }
};