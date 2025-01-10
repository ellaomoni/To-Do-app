const express = require('express');
const router = express.Router();

const {
    getAllTask,
    createTask,
    updateTask,
    deleteTask
} =require('../controller/taskController');

const validateTask = require('../middlewares/validate');

router.get('/',   getAllTask);
router.post('/', validateTask, createTask);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
