# Simple Route Loader
A simple module to autoload ExpressJS routers.

## Example
Simply `require` the module and pass in your Express app.

```
require('simple-route-loader')(app);
```

## Configuration
The module accepts a configuration object as an optional second parameter.

```
require('simple-route-loader')(app, {
    folder: __dirname
});
```

### Options
__folder__
- Change the folder to look for routers;
- Defaults to the current working directory.

__file__
- Change the name of files to load;
- Defaults to the _router.js_.
