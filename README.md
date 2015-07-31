# Simple Route Loader
A simple module to autoload ExpressJS routers.

## Installation
```js
npm i simple-route-loader
```

## Example
Simply `require` the module and pass in your Express app.

```js
require('simple-route-loader')(app);
```

## Configuration
The module accepts a configuration object as an optional second parameter.

```js
require('simple-route-loader')(app, {
    folder: __dirname
});
```

### Options
__folder__ &mdash; Change the folder to look for routers
- Can be a String or an Array. If a string is passed, it is cast to an array;
- Defaults to the current working directory.

__file__ &mdash; Change the name of files to load
- Can be a String or an Array. If a string is passed, it is cast to an array;
- Defaults to the _router.js_.

____
_Told you it's simple._
