function submitQuestion(question, outputContainer, inputContainer) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: '<YOUR_ID>',
      api_key: '<YOUR_API_KEY>',
      query: question
    })
  };

  fetch('https://myaskai.com/api/1.1/wf/ask-ai-query', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.hasOwnProperty('answer')) {
        const answer = data.answer.replace(/(?:\r\n|\r|\n)/g, '<br>');
        outputContainer.innerHTML = answer;
        outputContainer.style.display = 'block';
        inputContainer.style.display = 'none';
      } else {
        outputContainer.innerHTML = 'Sorry, I could not get the answer. Please try again later.';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      outputContainer.innerHTML = 'Sorry, I could not get the answer. Please try again later.';
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const chatbotIcon = document.createElement('div');
  chatbotIcon.classList.add('chatbot-icon');
  document.body.appendChild(chatbotIcon);

  const chatbotDialog = document.createElement('div');
  chatbotDialog.classList.add('chatbot-dialog');
  document.body.appendChild(chatbotDialog);

  const chatbotPrompt = document.createElement('p');
  chatbotPrompt.classList.add('chatbot-prompt');
  chatbotPrompt.textContent = '<YOUR_CHATBOT_PROMPT>';
  chatbotDialog.appendChild(chatbotPrompt);

  const chatbotInput = document.createElement('input');
  chatbotInput.classList.add('chatbot-input');
  chatbotInput.setAttribute('type', 'text');
  chatbotInput.setAttribute('placeholder', 'type question here + press enter');
  chatbotDialog.appendChild(chatbotInput);

  const chatbotOutput = document.createElement('div');
  chatbotOutput.classList.add('chatbot-output');
  chatbotDialog.appendChild(chatbotOutput);
  
    const chatbotButtons = document.createElement('div');
  chatbotButtons.classList.add('chatbot-buttons');
  chatbotDialog.appendChild(chatbotButtons);

  const askAnotherQuestionButton = document.createElement('button');
  askAnotherQuestionButton.classList.add('chatbot-button');
  askAnotherQuestionButton.textContent = 'Ask Another Question';
  askAnotherQuestionButton.display = 'None';
  chatbotButtons.appendChild(askAnotherQuestionButton);

  const closeButton = document.createElement('button');
  closeButton.classList.add('chatbot-button');
  closeButton.textContent = 'Close';
  chatbotButtons.appendChild(closeButton);

  chatbotIcon.addEventListener('click', () => {
    chatbotIcon.style.display = 'none';
    chatbotDialog.style.display = 'flex';
    chatbotInput.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    chatbotDialog.style.display = 'none';
    chatbotIcon.style.display = 'block';
  });

  askAnotherQuestionButton.addEventListener('click', () => {
    chatbotInput.style.display = 'block';
    chatbotOutput.style.display = 'none';
    chatbotInput.value = '';
    chatbotInput.focus();
  });

  chatbotInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitQuestion(chatbotInput.value, chatbotOutput, chatbotInput);
    }
  });
});