import { ADD_EMPLOYEE_RECORD, UPDATE_EMPLOYEE_RECORD, DELETE_EMPLOYEE_RECORD } from "/contants";

export const createEmployeeRecord = (state = {}, action) => {
  switch (action.payload) {
    case ADD_EMPLOYEE_RECORD:
      return { loading: false, record: action.payload };
    default:
      return state;
  }
};

export const updateEmployeeRecord = (state = {}, action) =>{
    switch(action.payload){
        case UPDATE_EMPLOYEE_RECORD:
            return {loading: false, record: action.payload};
        default:
            return state;
    }
}

export const deleteEmployeeRecord = (state ={}, action) =>{
    switch(action.payload){
        case DELETE_EMPLOYEE_RECORD:
            return {loading:false}
        default:
            return state;
    }
}
