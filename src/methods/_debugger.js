/**
 * Internal logger. Forwards `str` to `console.error` only when
 * `this.settings.debug` is `true`.
 *
 * @this {import('../main.js').TagTemplatesInstance}
 * @param {string} str  Message to log.
 * @returns {void}
 */
function _debugger ( str ) {
    if ( this.settings.debug )   console.error ( str )
} // debugger func.



export default _debugger


