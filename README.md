# Express

A boilerplate express app.

## Packages
- express
- mongodb
- winston
- ejs
- bodyparser

## Includes a logger attached to the global scope.
The logger is based on winston and can be used in any file loaded by app.js.
```js
logger.info("I'm info")
logger.debug("I'm debugging info")
logger.error("I'm an error!")
```

