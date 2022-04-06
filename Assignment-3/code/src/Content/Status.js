import React from "react";

export const Status = ({ employee }) => {
  const StatusDetail = ({ detailName, detail }) => {
    return (
      <div className="StatusDetail-wrapper">
        <div className="StatusDetail-name">{detailName + " "}</div>
        <div className="StatusDetail">{detail}</div>
      </div>
    );
  };
  const status = (
  <><span className="statusIcon"></span>
  {employee.status}</>
  );
  return (
    <div className="Status">
      <StatusDetail detailName={"Status"} detail={status} />

      <StatusDetail detailName={"Door"} detail={employee.door} />

      <StatusDetail detailName={"Time"} detail={employee.time} />
    </div>
  );
};
