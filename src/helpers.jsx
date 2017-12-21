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

/**
 * Generates a random emoticon
 */
export const GenerateEmote = () => {
    const emotes = [
        '¯\\_(ツ)_/¯',
        '(·.·)',
        '(≥o≤)',
        '(·_·)',
        '(;-;)',
        '(^_^)b',
        '(>_<)',
        '\\(^Д^)/',
        '(˚Δ˚)b',
        '\\(o_o)/',
        '(o^^)o'
    ];

    return emotes[Math.floor(Math.random() * emotes.length)];
}