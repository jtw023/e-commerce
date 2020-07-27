// require other files from this project
const Repository = require('./repository');

class ProductsRepository extends Repository {}

module.exports = new ProductsRepository('products.json');
