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
    
    if(data && (method === 'GET')) {
        const qs = new URLSearchParams(data);
        url = `${url}?${qs}`;
    }

    const promise = new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => resolve(JSON.parse(xhr.responseText)));
        xhr.open(method, url);
        if(headers) {
            for(let name in headers) {
                xhr.setRequestHeader(name, headers[name]);
            }
        }
        xhr.send(data && (method != 'GET')? JSON.stringify(data) : undefined);
    });

    return promise;
}
