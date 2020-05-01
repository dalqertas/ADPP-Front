import React, {Component} from "react";
import { observer } from "mobx-react";

import StudentStore from "../Stores/studentStore";


class RequestDetail extends Component{
    state={
        selected:null
    }
  requestID = this.props.match.params.requestID;
  
  request = StudentStore.getRequestById(this.requestID);
handleChange= (event) =>{
    this.setState({selected:event.target.value})
}
handleSubmit= () =>{
    StudentStore.submitRequest(this.request,this.state.selected);
}
  
  render(){
  return (
    <div className="container">
      <div className="card" style={{ marginTop: 50 }}>
        <div className="card-header">Request: {this.request.id}</div>
        <div className="card-body">{this.request.courseName}</div>
        <div className="card-body">{this.request.description}</div>
        <div className="card-body"> Students:{this.request.studentsNo}</div>
        <fieldset className="form-group" style={{marginLeft:30}}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios1"
                value="yes"
                onChange={this.handleChange}
              />
              yes
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios2"
                value="no"
                onChange={this.handleChange}
              />
              no
            </label>
          </div>
          <div className="form-check disabled">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios3"
                value="unsure"
                onChange={this.handleChange}
              />
              unsure
            </label>
          </div>
        </fieldset>
        <button className="btn btn-info" style={{marginLeft:30,width:100,marginBottom:30}} onClick={this.handleSubmit}>Submit</button>
      </div>
    </div>
  );
  }
};
export default observer(RequestDetail);
