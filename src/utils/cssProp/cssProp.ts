import { StandardLonghandPropertiesHyphen, StandardShorthandPropertiesHyphen } from 'csstype';
import cssValue from '../cssValue';

/**
 * Creates a CSS Style property or returns an empty string.
 *
 * Useful for preventing useless styles such as `width: undefined`.
 */
function cssProp(
    prop: keyof StandardLonghandPropertiesHyphen | keyof StandardShorthandPropertiesHyphen,
    value?: string | number,
    defaultValue?: string | number,
): string {
    if (value !== undefined || defaultValue !== undefined) {
        return `${prop}: ${cssValue(value, defaultValue)}`;
    }
    return ``;
}

export default cssProp;