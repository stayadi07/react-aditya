
import React from "react";

export const ContactInfo = ({ employee }) => {
  const ContactDetail = ({ detailName, detail }) => {
    return (
      <div className="ContactDetail-wrapper">
        <span className="ContactDetail-name">{detailName + " "}</span>
        <span className="ContactDetail">{detail}</span>
      </div>
    );
  };
  return (
    <div classsName="ContactInfo-wrapper">
      <ContactDetail detailName={"Appointment"} detail={employee.appointedOn} />

      <ContactDetail detailName={"E-mail:"} detail={employee.email} />

      <ContactDetail detailName={"Phone"} detail={employee.phone} />
    </div>
  );
};
