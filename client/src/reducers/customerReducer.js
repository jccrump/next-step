const initialState = {
    customerList: []
}

const customerReducer = (state = initialState, action) =>{
    let newState = state
    switch(action.type){    
        case "GET_CUSTOMERS":
            return{
                ...newState,
                customerList:[...action.payload]
            }
        default:
        return state
    }

    
}

export default customerReducer