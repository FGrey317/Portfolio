const scenario = [
    {
      prompt: 'Starting each session, the tutor wants to set a good precedent with the tutee and set good expectations. Which of the following options is the best way to set a good precedent?',
      options: [
        'Show up 10 minutes early and greet the tutee.',
        'Begin the session without any greetings.',
        'Show up 5 minutes late and apologize to the tutee.'
      ],
      feedback: [
        'Great choice! Showing up early and greeting the tutee sets a positive tone for the session.',
        'Incorrect. It is important to show up early and greet the tutee to set a good precedent.',
        'Incorrect. Showing up late and apologizing is not the best way to set a good precedent.'
      ],
      correctAnswer: 0
    },
    {
      prompt: 'Before you begin tutoring, what should you ensure the tutee has done?',
      options: [
        'Signed in and understands the sign-in process.',
        'Checked their phone.',
        'Brought all their course materials.'
      ],
      feedback: [
        'Well done! Making sure the tutee has signed in and understands the sign-in process is important for tracking our services and maintaining an accurate schedule.',
        'That\'s not the best choice. Before starting, it is crucial to ensure the tutee has signed in and understands the sign-in process.',
        'Incorrect. While bringing course materials is important, ensuring the tutee has signed in and understands the sign-in process is the priority at this stage.'
      ],
      correctAnswer: 0
    },
    {
      prompt: 'What should be done before the halfway point of the session?',
      options: [
        'Set an agenda and make sure the tutee understands it.',
        'Start tutoring without any plan.',
        'Ask the tutee if they have any questions.'
      ],
      feedback: [
        'Correct! Setting an agenda and ensuring the tutee understands it should happen before the halfway point of the session.',
        'Incorrect. It is important to set an agenda and make sure the tutee understands it before the halfway point of the session.',
        'That\'s not the best choice. While addressing the tutee\'s questions is important, setting an agenda is a crucial step that should happen before the halfway point.'
      ],
      correctAnswer: 0
    },
    // Add more stages of the scenario here...
  ];
  
  let currentStage = 0;
  const chatLog = document.getElementById('chat-log');
  const optionsContainer = document.getElementById('options');
  
  // Function to append a message to the chat log
  function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + sender;
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  // Function to create answer buttons
  function createAnswerButtons() {
    const options = scenario[currentStage].options;
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'answer-btn';
      button.innerText = option;
      button.addEventListener('click', () => {
        evaluateUserInput(index);
      });
      optionsContainer.appendChild(button);
    });
  }
  
  // Function to evaluate the user's input and provide feedback
  function evaluateUserInput(choice) {
    const correctAnswer = scenario[currentStage].correctAnswer;
    appendMessage(scenario[currentStage].options[choice], 'user');
    if (choice === correctAnswer) {
      appendMessage(scenario[currentStage].feedback[choice], 'bot');
      currentStage++;
      if (currentStage < scenario.length) {
        appendMessage(scenario[currentStage].prompt, 'bot');
        createAnswerButtons();
      } else {
        appendMessage('Congratulations! You have completed the tutoring session.', 'bot');
        optionsContainer.innerHTML = '';
      }
    } else {
      appendMessage(scenario[currentStage].feedback[choice], 'bot');
    }
  }
  
  // Initial bot message
  appendMessage('Welcome to the tutor training session! Let\'s begin.', 'bot');
  
  // Display the first prompt
  appendMessage(scenario[currentStage].prompt, 'bot');
  
  // Create answer buttons
  createAnswerButtons();
  