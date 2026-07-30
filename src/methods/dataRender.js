"use strict"

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
function dataRender ( list, settings ) {
return function dataRender ( template, data ) {
            let
                  engine = this
               , { TG_PRX, TG_SIZE_P, TG_SIZE_S } = settings
               ;
    
            if ( list.hasOwnProperty(template) ) {
                        return list[template].map ( str => {
                                                let 
                                                      hasPrefix = str.indexOf(TG_PRX)
                                                    , size = str.length
                                                    ;
                                                if ( hasPrefix != -1 ) {
                                                        let id =  str.substr (TG_SIZE_P,size-TG_SIZE_P-TG_SIZE_S);
                                                        if ( data[id] )   return data[id]
                                                        engine._debugger ( `Missing data for placeholder "${id}"` )
                                                        return
                                                    }
                                                return str
                                    }).join ('')
                }
            engine._debugger ( `Missing template "${template}"` )
            return null
    }}
    
        
    
export default dataRender
    
    
    