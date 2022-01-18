import './App.css';
import {Switch,Route,BrowserRouter as Router } from  'react-router-dom'
import ListEmployeesComponent from "./screens/ListEmployeesComponent";

import HeaderComponent from "./components/HeaderComponent";
import UpdateEmployeeComponent from "./screens/UpdateEmployeeComponent";
import CreateEmployeeComponent from "./screens/CreateNewEmployee";


function App() {
  return (
      <div>
        <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={ListEmployeesComponent}/>
                <Route path={"/employees"} component={ListEmployeesComponent}/>
                <Route path={"/update-employee/:id"} component={CreateOrUpdateEmployeeComponent}/>
                <Route path={"/add-employee/"} component={CreateEmployeeComponent}/>
              </Switch>
            </div>
        </Router>
      </div>
  );
}

export default App;
