'use strict'

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
function showTemplateNames ( list ) {
            return function showTemplateNames () {
                    return Object.keys ( list )
    }} // showTemplateNames func.



export default showTemplateNames


