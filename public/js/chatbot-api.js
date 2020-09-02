'use strict';

import * as apiClient from './api-client.js';

const url = 'https://dialogflow.clients6.google.com/v2/projects/PROJECT_ID/agent/sessions/SESSION_ID:detectIntent';
const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer THE_JWT_GOTTEN_FROM_CONSOLE',
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

    switch(data.queryResult.action) {
        case 'input.ask.time':
            return (new Date()).toLocaleTimeString();
        case 'input.ask.product.detail':
            if(data.queryResult.parameters.product) {
                switch(true){
                    case (data.queryResult.parameters.product.indexOf('book') >= 0):
                        return 'This is a book.';
                    case (data.queryResult.parameters.product.indexOf('eraser') >= 0):
                        return 'Pencil\'s eraser';
                }
            }

            return 'Unknown!!!';
        default:
            return data.queryResult.fulfillmentText;
    }
}
