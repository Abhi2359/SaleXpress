const express =require("express")


const app = express();


app.get("/",(req,res)=>{
    console.log("Welcome to express app");

})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server listening on `);
})