const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')


// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler( async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    //res.status(200).json([{message:"Get Goals"}, goals])
    res.status(200).json(goals)
})

// @desc Set Goals
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler( async (req, res) => {
    
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add something in a text field')   // express error handler
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    //res.status(200).json([{message:"Goal Created"}, goal])
    res.status(200).json(goal)
})


// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private

const updateGoals = asyncHandler( async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    //const user = await User.findById(req.user.id)

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })

    //res.status(200).json([{message:"Goal Updated"}, updatedGoal])
    res.status(200).json(updatedGoal)
})


// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private

const deleteGoals = asyncHandler( async(req, res) => {

    const id = req.params.id
    const goal = await Goal.findById(id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    //const user = await User.findById(req.user.id)

    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()


    //res.status(200).json([{message:`Goal ${req.params.id} Deleted`}, id])
    res.status(200).json({message:`Goal ${req.params.id} Deleted`})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}