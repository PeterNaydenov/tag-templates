'use strict'

function render ( list, settings ) {
return function render () {   // call template with data
        let 
                 engine = this
               , { TG_PRX, TG_SIZE_P, TG_SIZE_S, DV } = settings
               , d 
               , template
               , txt
               , hasRows = ( arguments[1] && arguments[1].includes('\n') ) ? true : false
               ;
               
            txt = ( hasRows )  ? arguments[1] : arguments[0].join ('')   // The 'arguments[0]' is always an array
            if ( !hasRows ) {
                        let args = _applyArgs ( arguments[0], arguments );
                        txt = args.join ('')
                }
            if ( txt.includes('\n') )   d = txt.trim ( ).split ( '\n' )
            else                        d = txt.trim ( ).split ( ' ' )
            
            template = d[0].trim ()
            let t = _readProps ( d, DV );    // Read props
    
            if ( list.hasOwnProperty(template) ) {
                        return list[template].map ( str => {
                                                let 
                                                      hasPrefix = str.indexOf(TG_PRX)
                                                    , size = str.length
                                                    ;
                                                if ( hasPrefix != -1 ) {
                                                        let id =  str.substr (TG_SIZE_P,size-TG_SIZE_P-TG_SIZE_S);
                                                        if ( t[id] )   return t[id]
                                                        engine._debugger ( `Missing data for placeholder "${id}"` )
                                                        return
                                                    }
                                                return str
                                    }).join ('')
                }
            engine._debugger ( `Missing template "${template}"` )
            return null
}} // render func.





function _applyArgs (arg, updates) {
    return arg.reduce ( (res,el,i) => {
                        res.push ( el )
                        if ( updates[i+1])   res.push ( updates[i+1])
                        return res
                },[])
} // _applyArgs func.





function _readProps ( d , DV ) {
    const t = {};
    let txt = d.join ( ' ' );
    if ( txt.includes ('\n') )   d = txt.split ( '\n' )
    d.forEach ( (el,i) => {   // Read variable from the incoming string
                        if ( i == 0 )   return
                        let [ k, v ] = el.split ( DV )
                        k = k.trim ()
                        v = v.trim ()
                        if ( !t[k] )   t[k] = v
                })
    return t
} // readProps



module.exports = render


