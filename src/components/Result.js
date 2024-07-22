import React from "react";
import "./Result.css";

const Result = ({ result }) => {
  return (
    <div id="result" className="result">
      {result}
    </div>
  );
};

export default Result;
