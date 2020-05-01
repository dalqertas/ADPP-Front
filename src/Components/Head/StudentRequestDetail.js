import React from "react";
import { observer } from "mobx-react";
import RequestStore from "../Stores/requestStore";

const StudentRequestDetail = (props) => {
  const requestID = props.match.params.requestID;
  console.log(requestID);
  const request = RequestStore.getStudentRequestById(requestID);

  console.log(request);
  const handleDeny = () => {
    RequestStore.denyRequest(request);
  };
  const handleApprove = () => {
    RequestStore.approveRequest(request);
  };
  return (
    <div className="container">
      <div className="card" style={{ marginTop: 50 }}>
        <div className="card-header">Request: #{request.id}</div>
        <div className="card-body">Course Name:{request.courseName}</div>
        <div className="card-body">{request.description}</div>
        <div className="card-body"> Student:{request.studentID}</div>
        <button
          className="btn btn-info"
          style={{ width: 100, marginBottom: 2, marginLeft: 2 }}
          onClick={handleApprove}
        >
          Aprrove
        </button>
        <button
          className="btn btn-info"
          style={{ width: 100, marginBottom: 2, marginLeft: 2 }}
          onClick={handleDeny}
        >
          Deny
        </button>
      </div>
    </div>
  );
};
export default observer(StudentRequestDetail);
