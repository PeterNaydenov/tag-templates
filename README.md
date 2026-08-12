# Tag Templates (@peter.naydenov/tag-templates)

![version](https://img.shields.io/github/package-json/v/peterNaydenov/tag-templates)
![license](https://img.shields.io/github/license/peterNaydenov/tag-templates)
![issues](https://img.shields.io/github/issues/peterNaydenov/tag-templates)
![language](https://img.shields.io/github/languages/top/peterNaydenov/tag-templates)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/%40peter.naydenov/tag-templates/1.5.0)

Template engine built on top of JavaScript's native technologies: template literals and tag functions.



## Installation

Install the package:

```
npm i @peter.naydenov/tag-templates
```

Add it to your script:

```js
import tagTemplates from '@peter.naydenov/tag-templates';
```



## Methods

The engine exposes four methods. All of them accept their input as text
strings — most of them via a tag-function call so you can mix in variables
with the usual `${...}` syntax.

| Method               | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| `addTemplate`        | Register a named template.                         |
| `render`             | Render a template against inline data (tag form).  |
| `dataRender`         | Render a template against a plain data object.     |
| `showTemplateNames`  | List the names of all registered templates.        |



## Configuration object

All fields are optional. Anything you omit falls back to the defaults below.

```js
{
    TG_PRX : '{{'   // Placeholder opening tag.
  , TG_SFX : '}}'   // Placeholder closing tag.
  , DV     : ':'    // Divider between a key and its value inside render calls.
  , debug  : false  // When true, warnings and error messages are written to console.error.
}
```



## How to use it

```js
import tagTemplates from '@peter.naydenov/tag-templates';

// Create an engine instance:
const engine = tagTemplates();

// Register a template named "hello":
engine.addTemplate`
            hello
                <title>Hello {{name}}</title>
                <p>{{msg}}</p>`;

// (You can also build the template from external strings:)
let nextTemplate = `
            show
                <p>User {{name}} is {{age}} years old.</p>`;
engine.addTemplate`${nextTemplate}`;
```

Since version 1.2.0 you can mix template literals with external variables:

```js
let
      title = '<h1>{{title}}</h1>'
    , txt   = '<p>{{text}}</p>';

engine.addTemplate`
        news
            ${title}
            ${txt}`;
```

### Rendering with inline data (`render`)

```js
// Render "hello" with inline props:
let block = engine.render`
            hello
                    name : Peter
                    msg  :  Welcome to this page`;
// -> <title>Hello Peter</title><p>Welcome to this page</p>

// Render "hello" mixing inline props with external variables:
let
      myMsg  = 'Other message'
    , myName = 'Kris'
    ;
block = engine.render`
            hello
                    name : ${myName}
                    msg  : ${myMsg}`;
// -> <title>Hello Kris</title><p>Other message</p>

// Render the "news" template:
let newsBlock = engine.render`news
                title : my own news channel
                text  : Just started to write`;
// -> <h1>my own news channel</h1><p>Just started to write</p>
```

### Rendering with a data object (`dataRender`)

If you already have the data as an object, use `dataRender(name, data)`
instead of the tag-form `render`:

```js
engine.addTemplate`yo FROM: {{from}} TO {{to}}`;

let block = engine.dataRender('yo', { from: '10:00', to: '12:45' });
// -> 'FROM: 10:00 TO 12:45'
```

`dataRender` returns `null` when the template name is not registered and an
empty string for placeholders that have no matching data key.

### Listing registered templates (`showTemplateNames`)

```js
engine.addTemplate`one hi {{name}}`;
engine.addTemplate`mo  User: {{name}}`;

engine.showTemplateNames();
// -> ['one', 'mo']
```



## Customising the syntax

If your templates are not in Mustache style, override the placeholders and
the key/value divider via the configuration object:

```js
let
      config = {
                  TG_PRX : '<<'    // Custom opening tag
                , TG_SFX : '>>>'   // Custom closing tag
                , DV     : '-->'   // Custom key/value divider
              }
    , vm     = tagTemplates(config)
    ;

vm.addTemplate`
            test
                Your name is <<name>>>`;

let block = vm.render`
            test
                name --> Peter`;
// -> 'Your name is Peter'
```



## API summary

### `tagTemplates(config?) -> engine`

Creates a fresh, independent engine instance. Each call returns its own
template pool, so multiple engines don't share state.

### `engine.addTemplate`\``name …body`\``

Registers a named template. The first whitespace-separated token is the
name; everything that follows is the body. Empty fragments in the template
literal are filled from the next positional argument, so the name or the
body (or parts of the body) can come from external variables.

### `engine.render`\``name key:val key:${val2}`\``

Renders a registered template against inline data. The first token is the
template name; remaining tokens are `key:value` pairs separated by
`config.DV` (default `:`). A token whose value is missing reads from the
next positional argument (useful for inline variables). Returns `null` when
the template is not registered.

### `engine.dataRender(name, data)`

Renders a registered template against a plain object of placeholder values.
Returns `null` when the template is not registered. Missing keys render as
empty strings.

### `engine.showTemplateNames()`

Returns the array of template names currently registered in this engine.



## Links

- [History of changes](https://github.com/PeterNaydenov/tag-templates/blob/master/CHANGELOG.md)



## Credits

`@peter.naydenov/tag-templates` was created by Peter Naydenov.



## License

`@peter.naydenov/tag-templates` is released under the MIT License.
