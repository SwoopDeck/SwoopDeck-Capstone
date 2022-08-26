import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex-right">
    <div className="right-top-column">
      <h1> Oops - you are below your pull altitude!</h1>
      <p style={{margin: '1rem', marginBottom: '0'}}>Sorry, this page does not exist.</p>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <button className="view-jump-details" style={{padding: '1rem', margin: '1rem', display: 'flex', alignItems: 'center', fontSize: '1.2rem'}}>Click here to activate your AAD and land safely</button>
        </Link>
      </h2>
    </div>
    </div>
  );
}

export default ErrorPage;
