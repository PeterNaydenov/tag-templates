function addTemplate ( list ) {
return function addTemplate () {
            let 
                  ln = arguments.length
                , engine = this
                // , list  = engine.list
                , d = ( ln == 2 ) ? arguments[1].trim ().split ( ' ' ) : arguments[0][0].trim ().split ( ' ' )
                , tplName = d.shift().trim ()
                ;
            list [ tplName ] = engine._chopTemplate ( d.join(' ') )
}}

    

module.exports = addTemplate


