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
        default:
            return state
    }
}

export default expenseReducer