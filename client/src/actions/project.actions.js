import axios from "axios";

export function fetchProjects() {
  const request = axios.get("/api/projects");
  return dispatch => {
      request.then(({ data })=>{
          dispatch({ type:'GET_PROJECTS', payload:[...data] })
      })
  };
}
