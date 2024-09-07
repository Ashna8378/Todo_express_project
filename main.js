import express from 'express'
import cors from "cors"
const app = express()

import router from "./routes.js"
import mongoose from 'mongoose'



const url = `mongodb://localhost:27017/todo`

mongoose.connect(url)
.then(()=>console.log("connected to mongodb"))
.catch(()=>console.log("conncetion failed to mongodb"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.get("/",(req,res)=>{
    res.sendFile('index.html', { root: 'frontend' });
})
app.use("/",router)

const PORT = 4000
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`)
})

