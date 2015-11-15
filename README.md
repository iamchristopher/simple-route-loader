# Simple Route Loader
A simple module to autoload ExpressJS routers.

## Installation
```js
npm i simple-route-loader --save
```

## Example

Simply `require` the module and pass in your Express app..

```js
require('simple-route-loader')(app);
```
and create a router..
```js
'use strict';

var router = module.exports = require('express').Router();

router.route('/')
    .get(function (req, res) {
        res.send('Look, ma!');
    });

```

## Configuration
The module accepts a configuration object as an optional second parameter.

```js
require('simple-route-loader')(app, {
    dir: __dirname
});
```

### Options
__dir__ &mdash; Change the folder to look for routers
- Can be a String or an Array. If a String is passed, it is cast to an Array;
- Defaults to the current working directory.

__file__ &mdash; Change the name of files to load
- Can be a String or an Array. If a String is passed, it is cast to an Array;
- Defaults to the _router.js_.

__preserveTree__ &mdash; Use the actual file path of the router
- Can be a Boolean or a String. If a String is passed, it is cast to a Boolean;
- Defaults to _true_.

____
_Told you it's simple._
