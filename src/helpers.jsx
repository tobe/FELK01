/**
 * Looks for needle in the haystack.
 * @param {*string} needle The needle
 * @param {*array} haystack The haystack
 */
export const arrayContains = (needle, haystack) => {
    return (haystack.indexOf(needle) > -1);
}

/**
 * Makes the first letter of the string uppercase.
 * @param {*string} string The string to uppercase the first letter of
 */
export const firstLetterUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}