import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import expenseReducer from './expenseReducer'
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
    customer: customerReducer,
    expense: expenseReducer,
    project: projectReducer
})

export default rootReducer;