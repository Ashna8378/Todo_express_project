import express from 'express'

const app = express()

import router from "./routes.js"

app.use("/",router)

const PORT = 4000
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`)
})

