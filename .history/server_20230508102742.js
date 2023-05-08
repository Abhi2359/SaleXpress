import express from "express"
import colors from "colors"
import dotenv from "dotenv"
const app = express();

// CONFIGURATONS
dotenv.config();


// REST API
app.get("/",(req,res)=>{
  res.send({
    message:"Welcome to my app"
  })

})

const PORT = ;

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`.bgCyan.white);
})