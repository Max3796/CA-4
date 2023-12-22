import React from "react";
import "./QuestionBox.css";

function Result(props) {
    //to reset all the props to default except the theme
  const handleReset = () => {
    props.reset();
  };

  return (
    <div className={`result ${props.theme ? "light-theme" : "dark-theme"}`}>
      <h1>Results</h1>
      <div
        className="result-div"
        style={{ color: props.theme ? "black" : "white" }}
      >
        <div className="score">
          <h2>
            {/* displaying score */}
            {props.score} out of 5 correct ~ {(props.score / 5) * 100}%
          </h2>
        </div>
      </div>

      <button
        onClick={handleReset}
        style={{
          color: props.theme ? "black" : "white",
          backgroundColor: props.theme ? "#cddaff" : "#242424",
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Result;
