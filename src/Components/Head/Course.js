import React,{Component} from 'react';
import { render } from '@testing-library/react';

class Course extends Component{
state={
    offered:false
}
store=this.props.store
course=this.props.course
handleChange=(event)=>{
    this.setState({offered:event.target.checked})
    this.store.modifyCourse(this.course,event.target.checked,this.props.semester);
    }
componentDidMount(){
    const course=this.props.course
    if (course.offered==1){
        this.setState({offered:true});
    }
}

    render(){
       

    return (

        <div className="card">
            <div className="card-header">
                {this.course.courseName}
                <br/>
                <input type="checkbox" checked={this.state.offered} onChange={this.handleChange}/>
                
            </div>
        </div>
    )
    }
}
export default Course;