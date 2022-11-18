const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')



// Normal 

/* 
router.get('/', getGoals )
router.post('/', setGoals )
router.put('/:id', updateGoals )
router.delete('/:id', deleteGoals ) 
*/

// Making more clean

router.route('/')
    .get(getGoals)
    .post(setGoals)

router.route('/:id')
    .put(updateGoals)
    .delete(deleteGoals)

module.exports = router