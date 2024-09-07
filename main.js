import express from 'express'

const app = express()

import router from "./routes.js"
import mongoose from 'mongoose'

const url = `mongodb://localhost:27017/`

mongoose.connect(url)
.then(()=>console.log("connected to mongodb"))
.catch(()=>console.log("conncetion failed to mongodb"))

app.use("/",router)

const PORT = 4000
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`)
})

