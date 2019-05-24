import axios from "axios";

export function fetchCustomers() {
  const request = axios.get("/api/customers");
  return dispatch => {
      request.then(({ data })=>{
          dispatch({ type:'GET_CUSTOMERS', payload:[...data] })
      })
  };
}
