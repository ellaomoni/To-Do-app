const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
   status:{
        type: String,
        enum: ['pending', 'in-progess', 'completed', 'canceled'],
        default: 'pending',
   },
    duedate:{
        type: Date,
    }

}, {timestamps: true}
);


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;