import React from 'react';

const CourseCard = (props) =>{
return (
    <div className="card" style={{marginTop:5}}>
    <div className="card border-info" >
      <div className="card-header">{props.course.courseName}</div>
      <div className="card-body">
      <h6 className="card-subtitle text-muted">{props.course.description}</h6>
      </div>
    </div>
  </div>
)
}
export default CourseCard;