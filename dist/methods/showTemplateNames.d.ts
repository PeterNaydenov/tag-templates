/**
 * Factory and bound function for listing registered template names.
 *
 * @param {Object<string, string[]>} list  Shared template pool.
 * @returns {() => string[]}
 *
 * @example
 * vm.addTemplate`a ...`;
 * vm.addTemplate`b ...`;
 * vm.showTemplateNames();   // => ['a', 'b']
 */
declare function showTemplateNames(list: Record<string, string[]>): () => string[];
export default showTemplateNames;
