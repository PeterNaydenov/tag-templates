/**
 * Internal logger. Forwards `str` to `console.error` only when
 * `this.settings.debug` is `true`.
 *
 * @this {import('../main.js').TagTemplatesInstance}
 * @param {string} str  Message to log.
 * @returns {void}
 */
declare function _debugger(this: import('../main.js').TagTemplatesInstance, str: string): void;
export default _debugger;
