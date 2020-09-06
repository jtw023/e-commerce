// require other files from this project
const authRouter = require('../routes/admin/auth');
const adminProductsRouter = require('../routes/admin/products');
const userProductsRouter = require('../routes/userproducts');
const cartsRouter = require('../routes/cartproducts');

// require statement for outside libraries
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const app = express();
const port = process.env.PORT;

// Defined paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve from and middleware functions
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: [process.env.COOKIE_SESSION],
    })
);
app.use(authRouter);
app.use(adminProductsRouter);
app.use(userProductsRouter);
app.use(cartsRouter);

// Which port our server should listen to
app.listen(port, () => {
    console.log(`Server Started on port ${port}.`);
});
