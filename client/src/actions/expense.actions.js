import axios from "axios";

export function fetchExpenses() {
  const request = axios.get("/api/expenses");
  return dispatch => {
      request.then(({ data })=>{
          dispatch({ type:'GET_EXPENSES', payload:[...data] })
      })
  };
}

export function setApprovalStatus(status, id){
  const request = axios.post(`/api/expense/${id}/changestatus`,{
    status: status
  })

  return dispatch => {
    request.then(({data})=>{
      dispatch({type:'UPDATE_EXPENSE', payload:data.data})
    })
  }
 
}
export function setFileStatus(status, id){
  const request = axios.post(`/api/expense/${id}/changefilestatus`, {
    expenseID: id,
    fileLocation: status
  })

  return dispatch => {
    request.then((data) => {
      dispatch({type:'UPDATE_EXPENSE', payload:data.data.data})
    })
  }  
}