import React, { Component } from "react";
import Semester1 from "./Semester1";
import { observer } from "mobx-react";

import courseStore from "../Stores/courseStore";
import Semester2 from "./Semester2";

class Courses extends Component {
  state = {
    semesters: [],
  };

  render() {
    const getSemesters = courseStore.semesters.map((semester) => (
       
      <li className="nav-item ">
      {console.log(semester.semester)}
        <a
          className="nav-link"
          data-toggle="tab"
          href={"#" + semester.semester}
        >
          {semester.semester}
        </a>
      </li>
    )
   );

        /*
    const getTab = courseStore.semsters.map((semester) => (
      <Semester semesterName={semester.semester} id={semester.semester}/>
    ));
*/
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <ul className="nav nav-tabs nav-info">{getSemesters}</ul>
        <div
          id="#myTabContent"
          className="tab-content"
          style={{
            border: "0.5px solid #dee2e6",
            borderTop: "0",
            padding: 10,
            borderRadius: 1,
          }}
        >
          <Semester1 store={courseStore}/>
          <Semester2 store={courseStore}/>
        </div>
      </div>
    );
  }
}
export default observer(Courses);
