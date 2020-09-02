'use strict';

/**
 * Request to specified URL with the given method.
 * 
 * @param {string} url URL to be sent to.
 * @param {string} method HTTP method.
 * @param {*} [data] The data to be sent. For GET method it will be converted to query string.
 * @param {{[key: string]: *}} [headers] The request headers.
 * 
 * @returns Promise of response.
 */
export async function send(url, method, data, headers) {
    method = method.toUpperCase();
    const init = {
        method: method,
    };

    if(headers) {
        init.headers = headers;
    }

    if(data) {
        if(method === 'GET') {
            const qs = new URLSearchParams(data);
            url = `${url}?${qs}`;
        } else {
            init.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, init);
    return response.json();
}
