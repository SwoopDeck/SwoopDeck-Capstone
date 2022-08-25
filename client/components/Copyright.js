import React from "react";

export default function Copyright() {
  const d = new Date();
  const currentYear = d.getFullYear();

  return <div className="footer">{`© ${currentYear} Swoopdeck`}</div>;
}

//C: should the copyright date not be a static value? Not sure it makes sense for this number to change year to year
