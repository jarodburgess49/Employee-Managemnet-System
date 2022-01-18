import { ADD_EMPLOYEE_RECORD, UPDATE_EMPLOYEE_RECORD, DELETE_EMPLOYEE_RECORD } from "/contants";

export const addEmployee = (id, firstname, lastname, email) => async (
  dispatch,
  getState
) => {
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${server.BACKEND_API}/`,
      { recordId, name, rollno, branch },
      config
    );

    dispatch({
      type: ADD_EMPLOYEE_RECORD,
      payload: data,
    });
 
};

export const updateEmployeeDetails = (employee) => async (dispatch, getState) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
    
      },
    };
    const { data } = await axios.put(
       `${server.BACKEND_API}/${employee.id}`",
      employee,
      config
    );

    dispatch({
      type: UPDATE_EMPLOYEE_RECORD,
      payload: data,
    });
    
 
};

export const listEmployees = () => async (dispatch) => {
 
    dispatch({ type: BOOK_LIST_REQUEST });

    const { data } = await axios.get(`${server.BACKEND_API}`);
    dispatch({
      type: LIST_EMPLOYEES,
      payload: data,
    });
 
};