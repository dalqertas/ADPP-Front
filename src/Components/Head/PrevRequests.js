import React from "react";
import RequestStore from "../Stores/requestStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function PrevRequests() {
  const requests = RequestStore.requests;
  const RequestCards = requests.map((request) => (
    <Link
      to={`/head/requests/${request.id}`}
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
    <div id="prev" className="tab-pane fade">
      {RequestCards}
    </div>
  );
}
export default observer(PrevRequests);
