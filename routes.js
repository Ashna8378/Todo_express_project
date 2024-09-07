import express from "express"

// import { getAllTasks, addTask, deleteTask } from ".controller.js"
import { getAllTasks, addTask, deleteTask } from "./controller.js"

const router = express.Router()

router.get("/get", getAllTasks)
router.get("/post", addTask)
router.get("/delete", deleteTask)

export default router



