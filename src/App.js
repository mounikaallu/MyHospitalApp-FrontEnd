import { Component } from "react";
import Department from "./Components/Department";
import {   Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddDepartment } from "./Components/department-components/addDepartment";

export default class App extends Component{
    render(){
      return(
        <div>
           <Provider store={store}> 
          <NavBar />
          <Routes>
            
            <Route path="/department" element={ <Department />} /> 
            <Route path="/adddepartment" element={ <AddDepartment />} /> 

            {/* <Route path="/employee" element={ <Emp />} /> 
            <Route path="/sign-up" element={ <SignUp />} /> 
            <Route path="/users" element={ <User />} /> 
            <Route path="*" element={ <PageNotFound />} /> */}
          </Routes>
          </Provider>
        
        </div>
      )
    }
}
