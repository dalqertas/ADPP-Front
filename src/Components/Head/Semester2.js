import React, { Component } from "react";
import { observer } from "mobx-react";
import Course from "./Course";


class Semester2 extends Component {
  
  render() {
    const store=this.props.store;
    const courses=store.summerCourses.map(course =>(
<Course course={course} store={store} semester="Summer" key={course.id}/>
    ));
    
    // coursesOptions=RequestStore.courses.map(course => <CourseOption key={course.courseName} course={course}/>)
    return (
      <div id="Summer" className="tab-pane fade active show">
        <div className="form-group text-info">
          {courses}
        </div>
      </div>
       );
    }
  }
  export default observer(Semester2);
  