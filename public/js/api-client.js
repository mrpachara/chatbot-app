'use strict';

import { send } from './api-client-backend-fetch.js';

/**
 * Request to specified URL with GET method.
 * 
 * @param {string} url URL to be sent to.
 * @param {string} method HTTP method.
 * @param {*} [data] The data will be converted to query string.
 * @param {{[key: string]: *}} [headers] The request headers.
 * 
 * @returns Promise of response.
 */
export async function get(url, data, headers) {
    return await send(url, 'GET', data, headers);
}

/**
 * Request to specified URL with POST method.
 * 
 * @param {string} url URL to be sent to.
 * @param {string} method HTTP method.
 * @param {*} data The data to be sent.
 * @param {{[key: string]: *}} [headers] The request headers.
 * 
 * @returns Promise of response.
 */
export async function post(url, data, headers) {
    return await send(url, 'POST', data, headers);
}
