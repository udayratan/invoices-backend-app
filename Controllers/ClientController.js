var ClientController = function () { };
var Client_Invoices = require('../Schema/Client_Invoices');


ClientController.Client_Bill_Pay = function (values, callback) {
    var query = {
        InvoiceID: values.InvoiceID
    };
    var changes = {
        Whether_Amount_Paid: true
    }
    Client_Invoices.updateOne(query, changes).exec(function (err, Result) {
        callback('Bill Paid Successfully');
    })
}

ClientController.Get_All_Client_Invoices = function (values, callback) {
    var query = {
        EmailID: values.EmailID,
        GST_Number: values.GST_Number
    }
    Client_Invoices.find(query).exec(function (err, Result) {
        callback(Result);
    })
}


module.exports = ClientController;