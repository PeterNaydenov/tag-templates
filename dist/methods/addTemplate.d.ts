/**
 * Factory and tag function for registering a template with the engine.
 *
 * The outer call binds the tag function to a shared template pool; the inner
 * (returned) tag function is invoked as `` vm.addTemplate`...` ``.
 *
 * Empty fragments in the template literal are filled from the next positional
 * argument, so the template name or body can come from an external variable.
 *
 * @param {Object<string, string[]>} list  Shared template pool.
 * @returns {void}
 *
 * @example
 * const body = '<h1>{{title}}</h1>';
 * vm.addTemplate`page ${body}`;
 * vm.render`page title:Hello`;   // => '<h1>Hello</h1>'
 */
declare function addTemplate(list: Record<string, string[]>): void;
export default addTemplate;
