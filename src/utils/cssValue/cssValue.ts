import isNumber from 'lodash/isNumber';

/**
 * A utility function for converting a string or a number
 * to a CSS value. is the value is a number then `px` is added
 * to the end. If not, then the string is return.
 */
function cssValue(value?: string | number, defaultValue?: string | number): string {
    return value !== undefined
        ? `${isNumber(value) ? `${value}px` : value}`
        : `${isNumber(defaultValue) ? `${defaultValue}px` : defaultValue}`;
}

export default cssValue;