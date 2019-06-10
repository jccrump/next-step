import axios from "axios";

export function fetchVendors() {
  const request = axios.get("/api/vendor");
  return dispatch => {
      request.then(({ data })=>{
          dispatch({ type:'GET_VENDORS', payload:[...data] })
      })
  };
}


