'use strict';

import { getUserInputMessage, addChatMessage } from './chat.js';
import { chatbot } from './chatbot-api-proxy.js';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body').addEventListener('click', async (ev) => {
        if(ev.target.classList.contains('cmd-chat-send')) {
            const message = getUserInputMessage(true);
            addChatMessage('me', message);
            const answer = await chatbot(message);
            addChatMessage('friends', answer);
        }
    });
});
