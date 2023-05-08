const express =require("express")


const app = express();


app.get("/",(req,res)=>{
  res.send({
    message:""
  })

})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})