require('rootpath')();
var mail = require('./services/mail.service');
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');
var productController = require('./controllers/products.controller');
var featuredController = require('./controllers/featured.controller');
var menuController = require('./controllers/menu.controller');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
    secret: config.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({
    path: [
        '/users/authenticate',
        '/users/register',
        '/featured',
        '/products',
        '/menus']
}));

// routes
//user routes
app.use('/users', require('./controllers/users.controller'));
//product routes
app.use('/products', productController);
//featured routes
app.use('/featured', featuredController);
//menu routes
app.use('/menus', menuController);
// start server

var port = process.env.NODE_ENV === 'production' ? 80 : 4000;
var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);    
});