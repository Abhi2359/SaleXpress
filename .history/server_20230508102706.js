import express from "express"
import colors from "colors"
import dotenv from "dotenv"
const app = express();

??CONGIGUR


// REST API
app.get("/",(req,res)=>{
  res.send({
    message:"Welcome to my app"
  })

})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`.bgCyan.white);
})