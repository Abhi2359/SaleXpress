import express from "express"
import colors from "colors"
import dote
const app = express();


app.get("/",(req,res)=>{
  res.send({
    message:"Welcome to my app"
  })

})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`.bgCyan.white);
})