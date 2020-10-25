import React from "react";
import PropTypes from "prop-types";

function Result(props) {
  return (
    <div>
      <h1 className="result-header">You Result</h1>
      {props.quizResult.map((answer) => {
        return (
          <div className="result-list">
            <span className="question-no">Question.{answer.id}</span> &nbsp;
            &nbsp;
            <span className="answer-no">{answer.answer}</span>
          </div>
        );
      })}
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
