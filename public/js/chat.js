'use strict';

/**
 * Get user input message.
 * 
 * @param {*} clear Is input message cleared after has gotten?
 * 
 * @returns {string} User input message.
 */
export function getUserInputMessage(clear) {
    const userInputMessageElem = document.querySelector('#chat-user-input-message');
    const message = userInputMessageElem.value;
    if(clear) userInputMessageElem.value = '';
    return message;
}

/**
 * Create the message element.
 * 
 * @param {'me'|'frirends'} type The type of message.
 * @param {string} message The message to be created.
 * 
 * @returns {Element} Created elements.
 */
export function createChatMessage(type, message) {
    const typeClass = `cl-${type}`;
    const containerElem = document.createElement('div');
    containerElem.classList.add('chat-message-container', typeClass);
    const messageElem = document.createElement('div');
    messageElem.classList.add('chat-message');
    messageElem.textContent = message;
    containerElem.append(messageElem);

    return containerElem;
}

/**
 * Add message to chat display.
 * 
 * @param {'me'|'frirends'} type The type of message.
 * @param {string} message The message to be created.
 */
export function addChatMessage(type, message) {
    const chatDisplayElem = document.querySelector('#chat-display');
    chatDisplayElem.append(createChatMessage(type, message));
}
