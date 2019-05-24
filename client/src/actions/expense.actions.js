import axios from "axios";

export function fetchExpenses() {
  const request = axios.get("/api/expenses");
  return dispatch => {
      request.then(({ data })=>{
          dispatch({ type:'GET_EXPENSES', payload:[...data] })
      })
  };
}
