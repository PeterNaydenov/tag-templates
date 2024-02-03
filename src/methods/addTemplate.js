'use strict'

function addTemplate ( list ) {
return function addTemplate () {
            let 
                  engine = this 
                , tplName = null   // Extract template name<string>. If not extracted yet, <null>
                , res = []         // Buffer for extraction of template
                , argCount = 1     // Walks through top level of arguments array
                , dataList = null  // Data chunk as array
                , DIV = ' '        // Array divider for scanning purposes
                ;
            for ( let data of arguments[0] ) {
                          const isEmpty = ( '' === data.replace(/^\n+|\n$/g, '').trim ()   )
                          if ( isEmpty ) { 
                                    data = arguments[argCount]
                                    argCount++
                              }
                          if ( !tplName ) {
                                  data = data.replace(/^\n+|\n$/g, '').trim ()
                                  dataList = data.split ( DIV )
                                  tplName = dataList.shift ().trim ()
                              }
                          if ( !dataList && data ) {  
                                  dataList = data.split ( DIV )
                              }
                          res = res.concat ( dataList )
                          dataList = null
                }
            list [ tplName ] = engine._chopTemplate ( res.join ( DIV ).trim() )
}} // addTemplate func.



export default addTemplate


