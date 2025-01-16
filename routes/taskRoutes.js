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
router.post('/', authMiddleware, validateTask, createTask);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
