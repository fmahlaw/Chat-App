// Connect to the chat server
const socket = io();

// Get references to the HTML elements
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// When the user clicks the send button, send the message to the server
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  socket.emit('chat-message', message);
  messageInput.value = '';
});

// When the server sends a message, display it in the chat box
socket.on('chat-message', (message) => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
});
