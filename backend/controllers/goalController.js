
const asyncHandler = require('express-async-handler');

// desc Get Goals
// route GET /api/goals
// access private 

const getGoals = asyncHandler(async (request, response) => {
    response.status(200).json({
        "message":"Get Goals",
        "code":"successful"
    })
})

// desc Set Goals
// route POST /api/goalS
// access private 

const setGoal = asyncHandler(async (request, response) => {
    if (!request.body.text){
        response.status(404)
        throw new Error(
            "Please add a text field"
        )
    }
    response.status(200).json({
        "message":"Set Goals",
        "code":"successful"
    })
})


// desc Update Goals
// route PUT /api/goals/:id
// access private 

const updateGoal = asyncHandler( async (request, response) => {
    response.status(200).json({
        "message":`Update Goal ${request.params.id}`,
        "code":"successful"
    })
})

// desc Delete Goals
// route DELETE /api/goals/:id
// access private 

const deleteGoal = asyncHandler(async (request, response) => {
    response.status(200).json({
        "message":`Delete Goal ${request.params.id}`,
        "code":"successful"
    })
})


module.exports= {getGoals, setGoal, updateGoal, deleteGoal}