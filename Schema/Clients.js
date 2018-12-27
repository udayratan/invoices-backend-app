var mongoose = require('mongoose');
var Clients = mongoose.Schema({
    ClientID:{type:String,default:""},
    Name: { type: String, default: "" },
    PhoneNumber: { type: Number, default: 0 },
    EmailID: { type: String, default: "" },
    GST_Number: { type: String, default: "" }
}, { collection: 'Clients' });
module.exports = mongoose.model('Clients', Clients);