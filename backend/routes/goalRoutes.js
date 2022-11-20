const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')



// Normal 

/* 
router.get('/', getGoals )
router.post('/', setGoals )
router.put('/:id', updateGoals )
router.delete('/:id', deleteGoals ) 
*/

// Making more clean

router.route('/')
    .get( protect, getGoals )
    .post( protect, setGoals )

router.route('/:id')
    .put( protect, updateGoals )
    .delete( protect, deleteGoal )

module.exports = router