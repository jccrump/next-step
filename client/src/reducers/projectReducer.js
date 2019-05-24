const initialState = {
    projectList: []
}

const projectReducer = (state = initialState, action) =>{
    let newState = state
    switch(action.type){
        case 'GET_PROJECTS':
            return{
                ...newState,
                projectList: [...action.payload]
            }
        default:
            return state
    }
}

export default projectReducer