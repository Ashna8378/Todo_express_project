import express from "express"

const router = express.Router()

router.get("/get", function(req,res){
    console.log(req)
    console.log("Ashna")
})

export default router

