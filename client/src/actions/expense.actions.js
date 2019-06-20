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
      data.data.approval_status.status = status
      dispatch({type:'SET_APPROVAL_STATUS', payload:data.data})
    })
  }
 
}