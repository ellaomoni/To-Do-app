const Task = require('../models/task');


// Gat all Task 
const getAllTask = async(req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(error) {
        next(error);  
    }
};

// create a new task 
const createTask = async (req, res, next) => {
    try {
        const {title} = req.body;
        if(!title) {
            return res.status(400).json({ message: 'title is required'});
        }
        const task = new Task(req.body);
        const createdTask = await task.save();
        res.status(201).json(createdTask);
    }catch(error) {
        next(error);
    }
};


// update a task 
const updateTask = async(req, res, next)=> {
    try {
        const id = req.params.id;
        const {title, completed } = req.body;
        
        // Check if the task exists
        const existingTask = await Task.findById(id);
        if (!existingTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const task = await Task.findByIdAndUpdate(
            id, 
            {title,completed},
            {new: true, runValidators: true }
        );
        if(!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        res.status(200).json(task);

    }catch(error){
        next(error);
    }
};

// delete a task 
const deleteTask = async(req, res, next) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        res.status(200).json({ message: 'Task deleted successfully'});

    }catch(error) {
       next(error);
    }
};

module.exports = {getAllTask, createTask, updateTask, deleteTask};