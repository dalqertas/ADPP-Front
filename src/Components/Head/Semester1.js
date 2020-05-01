import React, { Component } from "react";
import { observer } from "mobx-react";
import Course from "./Course";


class Semester1 extends Component {
  state={
    courses:[]
  }
  

  render() {

    const store=this.props.store;
    const courses=store.springCourses.map(course =>(
<Course course={course} store={store} semester="Spring" key={course.id}/>
    ));
    
    return (
      <div id="Spring" className="tab-pane fade active show">
        <div className="form-group text-info">
          {courses}
        </div>
      </div>
       );
    }
  }
  export default observer(Semester1);
  