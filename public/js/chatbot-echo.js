'use strict';

import { sleep } from './util.js';

/**
 * Get answer from given message.
 * 
 * @param {string} message Given message.
 * 
 * @returns {Promise<string>} Promise of answer.
 */
export async function chatbot(message) {
    // Just simulate connection latency.
    await sleep(1000);
    return message;
}
