# Tag Templates (@peter.naydenov/tag-templates)

Template engine build on top of javascript native technologies: template literals and tag functions. 



## Installation
Install the package:

```
 npm i @peter.naydenov/tag-templates

```


Request the module from the script:

```js
const tagTemplates = require ( '@peter.naydenov/tag-templates' );

```


## Methods
Engine have just two methods: addTemplate and render. Both are receiving parameters as text strings. Look at "**How to use it**" section.

```js
{
  addTemplate : 'Write a template'
  render      : 'Convert data+template into a rendered block'
}
```

## Configuration object

All configuration fields are optional.
```js
{
        TG_PRX       : '{{'           // Change default  placeholder's opening tag
      , TG_SFX       : '}}'           // Change default  placeholder's opening tag
      , DV           : ':'            // Chnage default props divider
      , debug        : false          // Set on 'true' to receive more warnings and error messages
 }
```


## How to use it

```js
const tagTemplates = require ( '@peter.naydenov/tag-templates' );

// Create a render engine instance:
const engine = tagTemplates ()

// Set a template "hello".
  engine.addTemplate`
            hello
                <title>Hello {{name}}</title>
                <p>{{msg}}</p>`
 
 // Other technique when template is defined as external variable.
 let nextTemplate = `
                show
                    <p>User {{name}} is {{age}} years old.</p>`
 engine.addTemplate`${nextTemplate}`
 


 // After version 1.2.0 "addTemplate" could work like:
 let 
      title = '<h1>{{title}}</h1>'
    , txt = '<p>{{text}}</p>'
    ;
  
  engine.addTemplate`
          news
              ${title}
              ${txt}`

  engine.render`
            news
                title : my own news channel
                txt   : Just started to write `
    /**
     *  result:
     *    <title>my own news channel</title>
     *    <p>Just started to write</p>
     *  
     */

 
  // Render template 'hello' with data:
  let block = engine.render`
            hello
                    name : Peter
                    msg  :  Welcome to this page`
   /**
   *    result:
   *    <title>Hello Peter</title>
   *    <p>Welcome to this page</p> 
   */

   // Other way to provide the data for template "hello"
   let 
          myMsg = 'Other message'
        , myName = 'Kris'
        ;
   block = engine.render`
                hello
                    name : ${myName}
                    msg  : ${myMsg}`
    /**
    *     result:
    *     <title>Hello Kris</title>
    *     <p>Other message</p>
    */
```

If templates for your project are already created and they are not in mustache style, then modify the template engine by providing a configuration object:

```js
 let 
    config = { 
                TG_PRX : '<<'   // Change of opening tag
              , TG_SFX : '>>>'  // Change of closing tag
              , DV     : '-->'  // Data devider is also customizable
        }
    , vm = tagTemplates ( config )
    ;
    // Provide template with your custom style
    vm.addTemplate`
                    test
                    Your name is <<name>>>`
    // Render 
    let block = vm.render`
                    test
                        name --> Peter`
    // Result -->  'Your name is Peter'
```








## Release History

### 1.2.0 ( 2022-06-18 )
 - [x] Function addTemplate supports external variables for template definition;
 - [x] Define single template by mixing two or more template strings;

### 1.0.0 ( 2021-04-01 )
 - [x] Node.js module;
 - [x] Tests;
 - [x] Short documentation;



## Credits
'@peter.naydenov/tag-templates' was created by Peter Naydenov.



## License
'@peter.naydenov/tag-templates' is released under the MIT License.