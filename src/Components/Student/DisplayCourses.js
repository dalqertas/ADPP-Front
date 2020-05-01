import React,{Component} from "react";
import RequestStore from "../Stores/requestStore";
import CourseCard from "./CourseCard";
import { observer } from "mobx-react";

class DisplayCourses extends Component{
  render(){
  const courses = RequestStore.Courses;
  const courseCards= courses.map(course =>(
    <CourseCard course={course}/>
  ));
  const handleClick = () => {
    alert("im pressed");
  };
  return <div className="container">
    {courseCards}
  </div>;
  }
}
export default observer(DisplayCourses);
