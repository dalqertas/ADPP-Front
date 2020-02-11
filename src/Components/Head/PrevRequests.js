import React from "react";

function PrevRequests() {
  //const requests=axios.get("http:/192.168.43.24:3000/request/")
  const handleClick = () => {
    alert("im pressed");
  };
  return (
    <div id="prev" class="tab-pane fade">
      <div className="card border-info" onClick={handleClick}>
        <div className="card-header">Request</div>
        <div className="card-body">Request Date</div>
      </div>
    </div>
  );
}
export default PrevRequests;
