/**
 * Factory and bound function for rendering a registered template against a
 * plain object of placeholder values.
 *
 * - Missing values for placeholders become empty strings (a warning is
 *   emitted when `settings.debug` is on).
 * - Returns `null` when the template is not registered.
 *
 * @param {Object<string, string[]>}      list     Shared template pool.
 * @param {import('../main.js').Settings} settings Effective runtime settings.
 * @returns {(name: string, data: Object<string, string>) => ?string}
 *
 * @example
 * vm.addTemplate`yo FROM: {{from}} TO {{to}}`;
 * vm.dataRender('yo', { from: '10:00', to: '12:45' });
 * // => 'FROM: 10:00 TO 12:45'
 */
declare function dataRender(list: Record<string, string[]>, settings: import('../main.js').Settings): (name: string, data: Record<string, string>) => string | null;
export default dataRender;
