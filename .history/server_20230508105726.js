import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan";
const app = express();

// CONFIGURATONS
dotenv.config();


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