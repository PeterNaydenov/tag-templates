'use strict'

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
function render ( list, settings ) {
return function render () {   // call template with data
        let 
                 engine = this
               , { TG_PRX, TG_SIZE_P, TG_SIZE_S, DV } = settings

               , tplName = null   // Extract template name<string>. If not extracted yet, <null>
               , argCount = 1     // Walks through top level of arguments array
               , dataList = null  // Data chunk as array
               , DIV = ' '        // Array divider for scanning purposes
               , props = {}       // All properties
               ;

        for ( let data of arguments[0] ) {
                                const isEmpty = ( '' === data.replace(/^\n+|\n$/g, '').trim ()   )
                                if ( isEmpty && arguments[argCount] ) { 
                                            data = arguments[argCount].trim ();
                                            argCount++
                                    }
                                if ( !tplName ) {
                                            data = data.replace(/^\n+|\n$/g, '').trim ()
                                            dataList = data.split ( DIV )
                                            tplName = dataList.shift().trim ()
                                            let snippet = dataList.join ( DIV ).trim ();
                                            
                                            if ( snippet.match(/:$/) ) {   // When value is coming as external variable
                                                        props [ snippet.slice(0,-1).trim() ] = arguments[argCount].trim ()
                                                        argCount++
                                                }
                                            else {
                                                        props = Object.assign ( {}, _readProps ( dataList, DV), props )
                                                }
                                            continue
                                    }
                                if ( data ) {  
                                            let normalData = _norm ( data );
                                            normalData.map ( snippet => {
                                                        if ( snippet.match(/:$/) ) {
                                                                        props [ snippet.slice(0,-1).trim() ] = arguments[argCount].trim ()
                                                                        argCount++
                                                            }
                                                        else {
                                                                    if ( snippet )   props = Object.assign ( {}, _readProps([snippet], DV ), props )
                                                            }
                                                    })
                                    }
                        }

            if ( list.hasOwnProperty(tplName) ) {
                        return list[tplName].map ( str => {
                                            let 
                                                  hasPrefix = str.indexOf(TG_PRX)
                                                , size = str.length
                                                ;
                                            if ( hasPrefix != -1 ) {
                                                    let id =  str.substr (TG_SIZE_P,size-TG_SIZE_P-TG_SIZE_S);
                                                    if ( props[id] )   return props[id]
                                                    engine._debugger ( `Missing data for placeholder "${id}"` )
                                                    return
                                                }
                                            return str
                                }).join ('')
                }
            engine._debugger ( `Missing template "${tplName}"` )
            return null
}} // render func.










function _norm ( data ) {
    if ( data.includes('\n') )   return data.trim ().split ( '\n' )
    else                         return data.trim ().split ( ' ' )
} // norm func.



function _readProps ( d , DV ) {
    const 
          t = {}
        , regExpress2 = /(\s{3,})/gim                                       // Select big white spaces
        , strWithDiv  = d.join (' ').trim().replace ( regExpress2, '|||' )  // Convert big whitespaces to custom divider - '|||'
        , matches     = strWithDiv.split('|||')
        ;
    matches.forEach ( (el,i) => {   // Read variable from the incoming string
                        let [ k, v ] = el.split ( DV )
                        k = k.trim ()
                        v = v.trim ()
                        if ( !t[k] )   t[k] = v
                })
    return t
} // readProps



export default render


