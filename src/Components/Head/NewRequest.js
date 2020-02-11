import React, { Component } from "react";

import RequestStore from "../Stores/requestStore";

class NewRequest extends Component {
  state = {
    course: "",
    desc: ""
  };
  handleChange = event => {
    this.setState({ course: event.target.value });
  };
  handleDescChange = event => {
    this.setState({ desc: event.target.value });
  };
  render() {
    // coursesOptions=RequestStore.courses.map(course => <CourseOption key={course.courseName} course={course}/>)
    return (
      <div id="new" class="tab-pane fade active show">
        <div className="form-group text-info">
          <label for="course">Course</label>
          <select
          
            onChange={this.handleChange}
            className="form-control"
            style={{ width: 200 }}
            id="course"
          >
            <option>Option1</option>
          </select>
          <label for="description" style={{marginTop:10}}>Description</label>

          <textarea class="form-control" id="description" rows="3"></textarea>
          <label for="semster" style={{marginTop:10}}>Semester</label>
          <select
            multiple=""
            onChange={this.handleChange}
            className="form-control"
            style={{ width: 200 }}
            id="semester"
          >
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
          <input type="submit" className="btn btn-outline-info" style={{marginTop:20}}/>
        </div>
      </div>
    );
  }
}
export default NewRequest;
