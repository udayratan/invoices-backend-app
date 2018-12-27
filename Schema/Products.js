var mongoose = require('mongoose');
var Products =  mongoose.Schema({
    ProductID: { type: String, default: "" },
    Product_Name: { type: String, default: "" },
    Product_Price: { type: Number, default: 0 }
}, { collection: 'Products' });
module.exports = mongoose.model('Products', Products);