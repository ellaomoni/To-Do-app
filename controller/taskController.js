const Task = require('../models/task');
const mongoose = require('mongoose');

// Gat all Task 
const getAllTask = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(error) {
        res.status(500).json({ message: 'Erroe while fetching tasks', error});   
    }
};

// create a new task 
const createTask = async (req, res) => {
    try {
        const {name} = req.body;
        if(!name) {
            return res.status(400).json({ message: 'Name is required'});
        }
        const task = new Task(req.body);
        const createdTask = await task.save();
        res.status(201).json(createdTask);
    }catch(error) {
        res.status(500).json({ message: 'Error while creating a new task', error});   
    }
};


// update a task 
const updateTask = async(req, res)=> {
    try {
        const id = req.params.id;
        const {name, completed } = req.body;

        // Check if the task exists
        const existingTask = await Task.findById(id);
        if (!existingTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const task = await Task.findByIdAndUpdate(
            id, 
            {name,completed},
            {new: true, runValidators: true }
        );
        if(!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        res.status(200).json(task);

    }catch(error){
        res.status(500).json({ message: 'Error while updating a task', error});
    }
};

// delete a task 
const deleteTask = async(req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        res.status(200).json({ message: 'Task deleted successfully'});

    }catch(error) {
        res.status(500).json({ message: 'Error while deleting a task', error});
    }
};

module.exports = {getAllTask, createTask, updateTask, deleteTask};