var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('./'));

app.get('*', function(request, response, next) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(8000, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:8000');
});
