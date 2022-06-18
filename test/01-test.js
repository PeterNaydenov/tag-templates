const
     tagTemplates = require ( '../src/main' )
   , expect       = require ( 'chai' ).expect
   ;



describe ( 'Tag-templates', () => {


    
it ( 'General use: Add template and render some props', () => {
    let 
          vm      =  tagTemplates ()
        , hi      = 'hi Hello, {{name}}! Say: {{shout}}, {{shout}}!'  // Here is template named 'hi'
        , request = 'hi name:Peter shout:yo'   // Prepare request: Use template 'hi' with params "name" and "shout"
        ;

    vm.addTemplate`${hi}`               // Register the template 'hi'
    let block = vm.render`${request}`;  // Render request

    expect ( block ).to.be.equal ( 'Hello, Peter! Say: yo, yo!' )
 }) // it General use





 it ( 'Default settings are applied', () => {
        let vm = tagTemplates ();
        expect ( vm ).to.have.property ( 'settings' )
        expect ( vm.settings ).to.have.property ( 'debug' )
 }) // it default settings





 it ( 'Modify settings by providing "config" object', () => {
      let 
              config = { // change of opening and closing tags
                          TG_PRX : '<<'
                        , TG_SFX : '>>>'
                  }
            , vm = tagTemplates ( config )
            ;
      vm.addTemplate`
                  test
                     Your name is <<name>>>`
      let block = vm.render`
                        test
                            name : Peter`
      expect ( block ).to.contains ( 'Your name is Peter' )
 }) // it settings





 it ( 'Separate template pool', () => {
        let
              vm1 = tagTemplates ()
            , vm2 = tagTemplates ()
            ;
        vm1.addTemplate`one hi {{name}}`
        vm2.addTemplate`${'second Another template with {{name}}'}`

        let 
              result1 = vm1.render`one name:Peter`
            , result2 = vm1.render`second name:Georgy`  // Template 'second' is not registered in vm1!
            , result3 = vm2.render`second name:Vessy`
            , result4 = vm2.render`one name:Anton`      // Template 'one' is not registered in vm2
            ;

        expect ( result1 ).to.be.equal ( 'hi Peter')
        expect ( result2 ).to.be.null
        expect ( result3 ).to.be.equal ( 'Another template with Vessy')
        expect ( result4 ).to.be.null
 }) // it pool





 it ( 'Multiline templates', () => {
      let vm = tagTemplates ();
      /**
       *  Trying to add template that have many rows and template name 
       *  is not in the begining of the template string.
       */
      vm.addTemplate`  
            multiline
                        <h1> {{title}}</h1>
                        <p> Some text here </p>
                  `
      let block = vm.render`multiline title:Solution`
      expect ( block ).to.contains ( '<h1> Solution</h1>' )
 }) // it multiline template





it ( 'Template with external variable', () => {
      const 
              vm = tagTemplates ()
            , tpl = '<h1>{{title}}</h1>'
            , name = 'title'
            ;

      vm.addTemplate`

                  ${name} 
                        ${tpl}`

      const res = vm.render`
      
                  title
                              title: Just do it`

      expect ( vm.showTemplateNames()[0] ).to.be.equal ( 'title' )
      expect ( res ).to.be.equal ( '<h1>Just do it</h1>' )
}) // it template with external variable



it ( 'Mixed template definition', () => {
      const
              vm = tagTemplates ()
            , t1 = '<h1>{{title}}</h1>'
            , t2 = '<p>{{text}}</p>'
            ;
      vm.addTemplate`news
                        ${t1}
                        ${t2}`
      const res = vm.render`news
                              title: Hello
                              text: just testing`
      expect ( res ).to.be.equal ( '<h1>Hello</h1> <p>just testing</p>' )
}) // it mixed template definition



it ( 'Mixed template definition 2', () => {
      const
              vm = tagTemplates ()
            , t1 = 'news'
            , t2 = '<p>{{text}}</p>'
            ;
      vm.addTemplate`${t1}
                        <h1>{{title}}</h1>${t2}`
      const res = vm.render`news
                              title: Hello
                              text: just testing`
      expect ( res ).to.be.equal ( `<h1>Hello</h1> <p>just testing</p>` )
}) // it mixed template definition 2



it ( 'Multiline props', () => {
      let vm = tagTemplates ();
      vm.addTemplate`
           total   
                  <h1>{{title}} from {{author}}</h1>
                  <p>{{msg}}</p>
                `

      let block = vm.render`
                      total
                          title   :   Long string title
                          msg     :   Just a message
                          author  :   Peter
                      `
      expect ( block ).to.includes ('<h1>Long string title from Peter</h1>')
      expect ( block ).to.includes ( '<p>Just a message</p>' )
}) // it multiline props





it ( 'Single external prop', () => {
      let 
          vm = tagTemplates ()
        , externalTitle = 'External Title'
        ;
      // Set template 'total' to the engine:
      vm.addTemplate`
              total   
                  <h1>{{title}}</h1>
                `
      // Case 1:
      let block = vm.render` 
                      total 
                          title : ${externalTitle}`
      expect ( block ).to.contain ( '<h1>External Title</h1>' )
      
      // Case 2:
      let externalString = `total 
                        title:${externalTitle}`;
      let altBlock = vm.render`${externalString}`
      expect ( altBlock ).to.contains ( '<h1>External Title</h1>')

      // Case 3:
      let blockData = `total 
                          title : External Title`
      let block3 = vm.render`${blockData}` 
      expect ( block3 ).to.contain ( '<h1>External Title</h1>' )
}) // it external props





it ( 'Props with external variables', () => {
      // multi variables in props
      let vm = tagTemplates ();
      vm.addTemplate`
           total   
                  <h1>{{title}}</h1>
                  <p>{{msg}}</p>
                  <p>{{txt}}</p>
                `
      let
            title = 'External title'
          , txt   = 'Just text'
          ;

      let block = vm.render` 
                      total
                              title : ${title}
                              msg   : Just a message
                              txt   : ${txt}
                      `
      expect ( block ).to.contains ('<h1>External title</h1>')
      expect ( block ).to.contains ('<p>Just a message</p>')
      expect ( block ).to.contains ('<p>Just text</p>')
}) // it



it ( 'Missing prop', () => {
      let vm = tagTemplates ();
      vm.addTemplate` yo
                FROM: {{from}} TO {{to}}`
      let block = vm.render` yo
                      to : 12.45`
      expect ( block ).to.contain ( 'FROM:  TO 12.45')
}) // it missing prop



it ( 'Data render', () => {
      let vm = tagTemplates();
      vm.addTemplate`yo FROM: {{from}} TO {{to}}`
      let 
            data = {from: '10:00', to: '12:45'}
          , block = vm.dataRender ( 'yo', data )   // ( templateName, props )
          ;
      expect ( block ).to.be.equal ( 'FROM: 10:00 TO 12:45' )
}) // it data render



it ( 'Show template names', () => {
      let vm = tagTemplates();
      vm.addTemplate`yo FROM: {{from}} TO {{to}}`
      vm.addTemplate`mo User: {{name}}`
      let names = vm.showTemplateNames ();
      expect ( names ).to.have.length ( 2 )
      expect ( names ).to.contain ( 'yo' )
      expect ( names ).to.contain ( 'mo' )
}) // it show template names



it ( 'Latter evaluation?')

it ( 'CSS styles described like props in render call?' )


}) // describe