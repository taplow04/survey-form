import React from 'react';

function Question({ question, response, onAnswer }) {
  const renderDots = (max) => (
    <div className="dot-group">
      {[...Array(max)].map((_, index) => (
        <label key={index} className="dot-label">
          <input
            type="radio"
            name={question.id}
            value={index + 1}
            checked={response === String(index + 1)}
            onChange={(e) => onAnswer(question.id, e.target.value)}
          />
          <span className="dot"></span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="question">
      <label>{question.text}</label>
      {question.scale ? renderDots(question.scale) : (
        <textarea
          value={response || ''}
          onChange={(e) => onAnswer(question.id, e.target.value)}
        ></textarea>
      )}
    </div>
  );
}

export default Question;
