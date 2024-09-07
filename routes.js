import express from "express"

// import { getAllTasks, addTask, deleteTask } from ".controller.js"
import { getAllTasks, addTask, deleteTask } from "./controller.js"

const router = express.Router()

router.get("/get", getAllTasks)
router.post("/post", addTask)
router.delete("/delete/:id", deleteTask)

export default router



