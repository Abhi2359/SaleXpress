import { hashPassword ,comparePassword} from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import  JWT  from "jsonwebtoken";


export const registerController =async (req,res)=>{
    try {
        const { name, email, password, phone, address, answer } = req.body;
        //validations
        if (!name) {
          return res.send({ error: "Name is Required" });
        }
        if (!email) {
          return res.send({ message: "Email is Required" });
        }
        if (!password) {
          return res.send({ message: "Password is Required" });
        }
        if (!phone) {
          return res.send({ message: "Phone no is Required" });
        }
        if (!address) {
          return res.send({ message: "Address is Required" });
        }
        if (!answer) {
          return res.send({ message: "Answer is Required" });
        }
        //check user
        const exisitingUser = await userModel.findOne({ email });
        //exisiting user
        if (exisitingUser) {
          return res.status(200).send({
            success: false,
            message: "Already Register please login",
          });
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({
          name,
          email,
          phone,
          address,
          password: hashedPassword,
          answer,
        }).save();
    
        res.status(201).send({
          success: true,
          message: "User Registered Successfully",
          user,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in Registeration",
          error,
        });
      }
    };
    
    //LOGIN CONTROLLER
    export const loginController = async (req, res) => {
        try {
          const { email, password } = req.body;
          //validation
          if (!email || !password) {
            return res.status(404).send({
              success: false,
              message: "Invalid email or password",
            });
          }
          //check user
          const user = await userModel.findOne({ email });
          if (!user) {
            return res.status(404).send({
              success: false,
              message: "Email is not registered",
            });
          }
          const match = await comparePassword(password, user.password);
          if (!match) {
            return res.status(200).send({
              success: false,
              message: "Invalid Password",
            });
          }
          //token
          const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });
          res.status(200).send({
            success: true,
            message: "Logged In Successfully",
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              phone: user.phone,
              address: user.address,
              role: user.role,
            },
            token,
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Error in login",
            error,
          });
        }
      };

      // testController

      export const loginController = async (req, res) => {