/**
 * Factory and tag function for rendering a registered template against
 * inline data.
 *
 * The outer call wires the tag function to a shared template pool and the
 * effective settings; the inner returned tag function is invoked as
 * `` vm.render`...` ``.
 *
 * Inner-tag-function behaviour:
 * - The first whitespace-separated token is the template name.
 * - Other tokens are `key:value` pairs separated by `settings.DV`
 *   (default `':'`).
 * - A token whose value is missing reads its value from the next positional
 *   argument (useful for inline variables).
 * - Returns `null` when the template is not registered.
 * - Missing values for placeholders become empty strings (a warning is
 *   emitted when `settings.debug` is on).
 *
 * @param {Object<string, string[]>}      list     Shared template pool.
 * @param {import('../main.js').Settings} settings Effective runtime settings.
 * @returns {?string}
 *
 * @example
 * vm.addTemplate`greet Hello, {{name}}!`;
 * const out = vm.render`greet name:World`;   // => 'Hello, World!'
 */
declare function render(list: Record<string, string[]>, settings: import('../main.js').Settings): string | null;
export default render;
