import React, { useState } from "react";
import "./QuestionBox.css";
import Result from './Result';

export default function QuestionBox(props) {

    //destructuring
  const [Qnumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [highlight, setHighlight] = useState(false);

  //to get to the next question if user clicks on some options and updates score is its correct option
  const handleClick = (e) => {
    setCurrentQuestionNumber(Qnumber + 1);
    setHighlight(false);
    if (e.target.getAttribute('isValid') === "true") {
      setScore(score + 1);
    }
  };
  
  //to restart the quiz
  const handleReset = () => {
    setCurrentQuestionNumber(0);
    setScore(0);
    setHighlight(false);
  }

  //to set hightlight to true 
  const handleHighlight = () => { 
    setHighlight(!highlight);
  };

  return (
    <>
      {Qnumber < 5 ? ( 
        //switching theme to get css of dark and light mode
        <div className={`body ${props.theme ? 'light-theme' : 'dark-theme'}`}>
          
          <div className="question-box">
            <div className="ques-num">
                {/* updating question number */}
              <h4 className="questionNumber">Question: {Qnumber + 1}</h4>
            </div>

            <div className="question">
                {/* to set colour of the question to red if highlight is clicked */}
              <h1 style={{ color: highlight ? "red" : "" }}>{props.data[Qnumber].text}</h1>
            </div>
            <div className="options">

                {/* using map function to displaying all the options in grid */}
              {props.data[Qnumber].options.map((option, index) => (
                <button
                  style={{
                    color: props.theme ? 'black' : 'white',
                    backgroundColor: props.theme ? 'white' : '#242424'
                  }}
                  key={index}
                  className="option"
                  onClick={handleClick}
                  isValid={`${option.isCorrect}`}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className="highlight">
              <button
                onClick={handleHighlight}
                style={{
                  color: props.theme ? 'black' : 'white',
                  backgroundColor: props.theme ? 'white' : '#242424'
                }}
              >
                {highlight ? "Normal" : "Highlight"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        // if question number exceeds 5 it will render Result.jsx 
        <Result score={score} reset={handleReset} theme={props.theme}/> 
      )}
    </>
  );
}
