// Toggle Dark/Light Mode
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Show/Hide Contact Form Sidebar
const infoBtn = document.querySelector('.info-btn');
const contactSidebar = document.querySelector('.contact-sidebar');
infoBtn.addEventListener('click', () => {
    contactSidebar.classList.toggle('active');
});

// Chat Interactivity (Basic Setup)
const chatWindow = document.querySelector('.chat-window');
const chatInput = document.querySelector('.chat-input');
const chatMessages = document.querySelector('.chat-messages');
const chatSendBtn = document.querySelector('.chat-send');

chatSendBtn.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== '') {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = message;
        chatMessages.appendChild(msgDiv);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }
});

// Display Chat Window (can be controlled via button click)
chatWindow.style.display = 'block'; // Temporary setup for visibility
