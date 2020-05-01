import React from "react";
import StudentStore from "../Stores/studentStore";
import { observer } from "mobx-react";

function PrevRequests() {
    console.log(StudentStore.requests)
  const requestCards = StudentStore.requests.map(request => (
    <tr>
      <td>{request.courseName}</td>
      <td>{request.headID}</td>
      <td>{request.status}</td>
    </tr>
  ));
  return (
    <div
      id="prev"
      className="tab-pane fade"
      style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}
    >
      <div className="card">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th>Request #</th>
              <th>Head of Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{requestCards}</tbody>
        </table>
      </div>
    </div>
  );
}
export default observer(PrevRequests);
