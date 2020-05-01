import React, { Component } from "react";
import { observer } from "mobx-react";

import RequestStore from "../Stores/requestStore";
import StudentStore from "../Stores/studentStore";

class NewRequest extends Component {
  state = {
    courseName: "",
    description: "",
    semester:"",
    department:"",
    headID:""
  };
  heads = [{
    department:"Math",
    headID:"al.qertas.d"
},{
    department:"Computer Science",
    headID:"Liub.N"
}]

  handleCourse = event => {
    this.setState({ courseName: event.target.value });
  };
  handleDescChange = event => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    StudentStore.postRequest(this.state);
  };
  handleSemester= event =>{
    this.setState({ semester: event.target.value });

  }
  handleDepartment = event =>{
      const selectedIndex=event.target.options.selectedIndex;
      console.log(selectedIndex);
      const headID=event.target.options[selectedIndex].getAttribute('headID');
      this.setState({department:event.target.value,headID:headID})
StudentStore.getCourses(event.target.value)
  }
  render() {
    const courses = StudentStore.courses;
    const getCourseOptions = courses.map(course => (
      <option key={course.courseName} value={course.courseName}>{course.courseName}</option>
    ));
    const semesters = RequestStore.Semesters;
    const getSemesterOptions = semesters.map(semester => (
      <option key={semester.semester} value={semester.semester}>{semester.semester}</option>
    ));
    const departments=StudentStore.departments;
    const getDepartmentOptions=departments.map(department =>(
        <option key={department.name} headID={department.headID} value={department.name} >{department.name}</option>
    ));
    // coursesOptions=RequestStore.courses.map(course => <CourseOption key={course.courseName} course={course}/>)
    return (
      <div id="new" className="tab-pane fade active show">
        <div className="form-group text-info">
        <label htmlFor="department" style={{ marginTop: 10 }}>
            Department
          </label>
          <select
            multiple=""
            onChange={this.handleDepartment}
            className="form-control"
            style={{ width: 200 }}
            id="department"
          >
            {getDepartmentOptions}
          </select>
          <label htmlFor="course">Course</label>
          <select
            onChange={this.handleCourse}
            className="form-control"
            style={{ width: 300 }}
            id="course"
          >
            {getCourseOptions}
          </select>
          <label htmlFor="semster" style={{ marginTop: 10 }}>
            Semester
          </label>
          <select
            multiple=""
            onChange={this.handleSemester}
            className="form-control"
            style={{ width: 200 }}
            id="semester"
          >
            {getSemesterOptions}
          </select>
          <label htmlFor="description" style={{ marginTop: 10 }}>
            Description
          </label>

          <textarea
            className="form-control"
            id="description"
            rows="3"
            onChange={this.handleDescChange}
          ></textarea>
   
          <input
            type="submit"
            className="btn btn-outline-info"
            style={{ marginTop: 20 }}
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
export default observer(NewRequest);
