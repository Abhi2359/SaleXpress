const express from "express"
const colors from "colors"
const dotenv from "dotenv"
const organ from "morgan";
const connectDB from "./config/db.js";
const authRoutes from "./routes/authRoute.js"
const app = express();

// CONFIGURATONS
dotenv.config();

// Data base connnection
connectDB();


// Middlewares
app.use(express.json())
app.use(morgan("dev"))

// REST API
app.get("/",(req,res)=>{
  res.send({
    message:"Welcome to my app"
  })

})

const PORT = process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.DEV_MODE}  mode on ${PORT}`.bgCyan.white);
})