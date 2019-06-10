import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import expenseReducer from './expenseReducer'
import projectReducer from './projectReducer'
import vendorReducer from './vendorReducer';

const rootReducer = combineReducers({
    customer: customerReducer,
    expense: expenseReducer,
    project: projectReducer,
    vendor: vendorReducer
})

export default rootReducer;