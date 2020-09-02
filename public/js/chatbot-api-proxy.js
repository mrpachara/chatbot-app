'use strict';

import { uuidv4 } from './uuid.js';
import * as apiClient from './api-client.js';

const localSessionName = 'chatbot-session';

if(!localStorage.getItem(localSessionName)) {
    localStorage.setItem(localSessionName, uuidv4());
}

const url = `http://localhost:3000/api/detect-intent/${localStorage.getItem(localSessionName)}`;
const headers = {
    'Content-Type': 'application/json; charset=utf-8',
};

/**
 * Get answer from given message.
 * 
 * @param {string} message Given message.
 * 
 * @returns {Promise<string>} Promise of answer.
 */
export async function chatbot(message) {
    const data = await apiClient.post(url, {
        queryInput: {
            text:{
                text: message,
                languageCode: "th",
            },
        },
        queryParams:{
            timeZone: "Asia/Bangkok",
        },
    }, headers);

    return data.queryResult.fulfillmentText;
}
