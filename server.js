const express = require('express');
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static');
const env = process.env.NODE_ENV || 'development';

const app = express();

if(env === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
}
// Use a fallback for non-root routes (required for Vue router)
app.use(history({
    verbose: true
}))
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);