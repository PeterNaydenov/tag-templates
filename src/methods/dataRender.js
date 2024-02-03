"use strict"

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
    
    
    