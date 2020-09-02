'use strict';

import { sleep } from './util.js';

const botName = 'มาลี';

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
    switch(true) {
        case (/(กี่โมง)|(เวลา.*เท่าไหร่)/imu).test(message):
            const now = new Date();
            return `${now.toLocaleTimeString('th-TH')}`;
        case (/(ชื่อ(อะ)?ไร)/imu).test(message):
            return `ฉันชื่อ ${botName} ค่ะ`;
        default:
            return 'ฉันไม่เข้าในที่คุณพูด';
    }
}
