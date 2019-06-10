const initialState = {
    vendorList: []
}

const vendorReducer = (state = initialState, action) =>{
    let newState = state
    switch(action.type){    
        case "GET_VENDORS":
            return{
                ...newState,
                vendorList:[...action.payload]
            }
        default:
        return state
    }

    
}

export default vendorReducer