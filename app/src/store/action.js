/**
 *
 * @param {{number, number}} value - {width, height}
 * @returns {{type: string, value: *}}
 */
export const setScreenSize = value => ({
    type: 'SET_SCREEN_SIZE',
    value,
});

/**
 *
 * @param {boolean} value - true if it is on mobile - false otherwise
 * @returns {{type: string, value: *}}
 */
export const setIsMobile = value => ({
    type: 'SET_IS_MOBILE',
    value,
});