const initialState = {
    expenseList: []
}

const expenseReducer = (state = initialState, action) =>{
    let newState = state
    switch (action.type){
        case 'GET_EXPENSES':
            return{
                ...newState,
                expenseList: [...action.payload]
            }
        case 'UPDATE_EXPENSE':
            let newExpenseList = newState.expenseList.filter((expense)=> expense._id !== action.payload._id)
            newExpenseList.push(action.payload)
            
            return{
                ...newState,
                expenseList: [...newExpenseList]
                
            }

        default:
            return state
    }
}

export default expenseReducer