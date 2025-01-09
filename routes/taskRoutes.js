const express = require('express');
const router = express.Router();

const {
    getAllTask,
    createTask,
    updateTask,
    deleteTask
} =require('../controller/taskController');

router.get('/', getAllTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
