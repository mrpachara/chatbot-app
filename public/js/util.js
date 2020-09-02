'use strict';

/**
 * Sleep for ms milliseconds.
 * 
 * @param {number} ms The number of milliseconds.
 */
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
