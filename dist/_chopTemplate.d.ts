/**
 * Factory and bound function for chopping a template body around
 * `{{placeholder}}` markers.
 *
 * Each returned call splits a template string into an array of segments
 * alternating between literal text and placeholder substrings (including
 * their `{{` / `}}` markers). If the template is malformed, returns a
 * sentinel array.
 *
 * @param {import('./main.js').Settings} settings  Effective runtime settings.
 * @returns {(text: string) => string[]}
 */
declare function _chopTemplate(settings: import('./main.js').Settings): (text: string) => string[];
export default _chopTemplate;
