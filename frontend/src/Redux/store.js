import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {
  createEmployeeRecord,
  updateEmployeeRecord ,
  deleteEmployeeRecord 
} from "../Redux/employeeActions.js";

const reducers = combineReducers({
  createEmployeeReducer: createEmployeeRecord,
  updateEmployeeReducer: updateEmployeeRecord,
  deleteEmployeeReducer: deleteEmployeeRecord,
  listEmployeesReducer: listEmployees
});


const initialState = {
 
};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;