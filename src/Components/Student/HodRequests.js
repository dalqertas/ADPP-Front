import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import StudentStore from "../Stores/studentStore";

function HodRequests() {
  const requests = StudentStore.headRequests;
  const RequestCards = requests.map((request) => (
    <Link
      to={`/student/requests/${request.id}`}
      className="card"
      style={{ marginTop: 10 }}
      key={request.id}
    >
      <div className="card-header">Request: {request.id}</div>
      <div className="card-body">
        <h6 className="card-subtitle text-muted">{request.date}</h6>
      </div>
    </Link>
  ));

  return (
    <div id="hod" className="tab-pane fade">
      {RequestCards}
    </div>
  );
}
export default observer(HodRequests);
