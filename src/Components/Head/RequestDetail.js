import React from "react";
import { observer } from "mobx-react";
import RequestStore from "../Stores/requestStore";

const RequestDetail = props =>{
    const requestID =props.match.params.requestID;
    console.log(requestID)
    const request=RequestStore.getRequestById(requestID);
    
    console.log(request)
    return(
        <div className="container">
        <div className="card" style={{marginTop:50}}>
        <div className="card-header">Request: {request.id}</div>
        <div className="card-body">{request.courseName}</div>
        <div className="card-body">{request.description}</div>
        <div className="card-body"> Students:{request.studentsNo}</div>
           <div className="card-body"> Yes:{request.yes}</div>
           <div className="card-body"> No:{request.no}</div>
           <div className="card-body"> Unsure:{request.unsure}</div>
        </div>
        </div>
    )
}
export default observer(RequestDetail);