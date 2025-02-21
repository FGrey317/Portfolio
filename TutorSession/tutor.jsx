import React, { useState } from 'react';
import './styles.css';

const scenario = [
  {
    prompt: 'You are about to start a tutoring session. How would you like to set a good precedent?\n\na) Show up 10 minutes early and greet the tutee.\nb) Begin the session without any greetings.\nc) Show up 5 minutes late and apologize to the tutee.',
    feedback: [
      'Great choice! Showing up early and greeting the tutee sets a positive tone for the session.',
      'Incorrect. It is important to show up early and greet the tutee to set a good precedent.',
      'Incorrect. Showing up late and apologizing is not the best way to set a good precedent.'
    ],
    options: ['a', 'b', 'c'],
    correctAnswer: 0
  },
  {
    prompt: 'Before you begin tutoring, what should you ensure the tutee has done?\n\na) Signed in and understands the sign-in process.\nb) Checked their phone.\nc) Brought all their course materials.',
    feedback: [
      'Well done! Making sure the tutee has signed in and understands the sign-in process is important for tracking our services and maintaining an accurate schedule.',
      'That\'s not the best choice. Before starting, it is crucial to ensure the tutee has signed in and understands the sign-in process.',
      'Incorrect. While bringing course materials is important, ensuring the tutee has signed in and understands the sign-in process is the priority at this stage.'
    ],
    options: ['a', 'b', 'c'],
    correctAnswer: 0
  },
  // Add more stages of the scenario here...
];

function App() {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setTimeout(() => {
      setSelectedOption(null);
      setCurrentStage(currentStage + 1);
    }, 1500);
  };

  const renderMessage = (message, isBot) => {
    return <div className={`message ${isBot ? 'bot' : 'user'}`}>{message}</div>;
  };

  const renderOptions = () => {
    const options = scenario[currentStage].options;
    return (
      <div className="options">
        {options.map((choice, index) => (
          <button
            key={index}
            className={`option-btn ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(index)}
            disabled={selectedOption !== null}
          >
            {choice}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="chat-container">
      <div className="chat-log">
        {currentStage < scenario.length &&
          renderMessage(scenario[currentStage].prompt, true)}
        {selectedOption !== null &&
          renderMessage(scenario[currentStage].feedback[selectedOption], false)}
      </div>
      {currentStage < scenario.length && renderOptions()}
    </div>
  );
}

export default App;
