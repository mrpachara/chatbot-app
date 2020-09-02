'use strict';

import { fromEvent } from 'https://unpkg.com/rxjs/_esm2015';
import { first, filter } from 'https://unpkg.com/rxjs/_esm2015/operators';

import { getUserInputMessage, addChatMessage } from './chat.js';
import { chatbot } from './chatbot-api-proxy.js';

fromEvent(document, 'DOMContentLoaded')
.pipe(
    first(),
)
.subscribe(() => {
    fromEvent(document, 'click')
    .pipe(
        filter((ev) => ev.target.classList.contains('cmd-chat-send')),
    )
    .subscribe(async () => {
        const message = getUserInputMessage(true);
        addChatMessage('me', message);
        const answer = await chatbot(message);
        addChatMessage('friends', answer);
    });
});
