const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const {
    getAllTask,
    createTask,
    updateTask,
    deleteTask
} =require('../controller/taskController');

const validateTask = require('../middlewares/validate');

router.get('/', authMiddleware,  getAllTask);
router.post('/create-task', authMiddleware, validateTask, createTask);
router.put('/:id', authMiddleware, validateTask, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
