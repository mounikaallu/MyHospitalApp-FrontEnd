import { Component } from "react";
import { connect } from "react-redux";
import { listDepartment } from "../store/action/department"
import AddDepartment from "./department-components/addDepartment";

export class Department extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum:0
    };
  }

  componentDidMount() {
     this.props.listDepartment();
  }

  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className="list-group-item">
                <button   className="list-group-item employee-sidebar" onClick={()=>{
                this.setState({componentNum : 1})}}>Show all Departments</button></li>
              <li className="list-group-item"><button  className=" list-group-item employee-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>Add Department</button></li>
              <li className="list-group-item">Delete Department</li>
              <li className="list-group-item">Update Department</li>

              {/* <li className="list-group-item">Assign Employee to Project</li>
              <li className="list-group-item">Show all Projects</li> */}
            </ul>
          </div>
          <div className="col-lg-9">
            {this.state.componentNum===1?
            <Department/>:<AddDepartment/>
            }
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Specialization</th>
                 
                </tr>
              </thead>
              <tbody>
                {
                  this.props.departmentList.list.map((e, index) => (

                    <tr key={e.id}>
                      <th scope="row" key={e.id}> {index + 1}</th>
                      <td>{e.id}</td>
                      <td>{e.specialization}</td>
                      
                    </tr>

                ))}   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    departmentList: state.department
  }; 
}

export default connect(mapStateToProps, {listDepartment})(Department);