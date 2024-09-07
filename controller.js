import Todo from "./schemas";


// get all tasks
async function getAllTasks(req,res){
    const tasks = await Todo.find();
    if(tasks){
        res.json(tasks)
    }else{
        res.status(500).json({message: "Error fetching tasks"})
    }
}

// add new task

async function addTask(req,res){
    const {task} = req.body
    const newTask = new Todo({task})
    const savedTask = await newTask.save()

    if(savedTask){
        res.json(savedTask)
    }
    else{
        res.status(500).json({message: "ERror adding task"})
    }
}

// delete a task

async function deleteTask(req,res){
    const {id} = req.params
    const deleteTask = await Todo.findByIdAndDelete(id)

    if(deleteTask){
        res.json({message: "Task deleted"})
    }
    else{
        res.status(500).json({message: 'Error deleting task'})
    }
}

export {getAllTasks, addTask, deleteTask}