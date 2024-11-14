import React from 'react';

function NavigationButtons({ currentQuestion, totalQuestions, onNext, onPrevious, onSkip, onSubmit }) {
  return (
    <div className="navigation-buttons">
      <button onClick={onPrevious} disabled={currentQuestion === 0}>Previous</button>
      <button onClick={onSkip}>Skip</button>
      <button onClick={onNext} disabled={currentQuestion === totalQuestions - 1}>Next</button>
      {currentQuestion === totalQuestions - 1 && (
        <button onClick={onSubmit}>Submit Survey</button>
      )}
    </div>
  );
}

export default NavigationButtons;
