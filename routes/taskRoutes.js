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

router.get('/', getAllTask);
router.post('/create', authMiddleware, validateTask, createTask);
router.put('/:id', authMiddleware, validateTask, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
