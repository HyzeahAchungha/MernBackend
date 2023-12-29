const { Router } = require('express')
const {
    getTasks,
    saveTask,
    deleteTask,
    updateTask
} = require('../controllers/TaskControllers')


const router = Router()

router.get('/get', getTasks)
router.post('/save', saveTask)
router.delete('/delete/:id', deleteTask)
router.put('/update/:id', updateTask)



module.exports = router