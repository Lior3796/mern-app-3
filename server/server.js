const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

// app.use("/api/student",studentRouter);

app.get("/",(req,res)=>{
    res.send("we live here")
})

app.listen(port,(err,data)=>{
    if(err) throw err;
    console.log("on air");
})

