var AdminController = function () { };
var Clients = require('../Schema/Clients');
var Products = require('../Schema/Products');
var uuid = require('uuid');
var Client_Invoices = require('../Schema/Client_Invoices');

AdminController.Get_All_Invoices = function (callback) {
    Client_Invoices.find().exec(function (err, Result) {
        callback(Result);
    })
}

AdminController.Create_Client_Invoice = function (values, Invoices_Amount, callback) {
    var Data = {
        InvoiceID: uuid(),
        ClientID: values.ClientID,
        Name: values.Name,
        PhoneNumber: values.PhoneNumber,
        EmailID: values.EmailID,
        GST_Number: values.GST_Number,
        ProductData: Invoices_Amount.ProductData,
        Subtotal_Amount: Invoices_Amount.Subtotal_Amount,
        GST_Percentage: values.GST_Percentage,
        GST_Amount: Invoices_Amount.GST_Amount,
        Total_Amount: Invoices_Amount.Total_Amount,
        Invoice_Date: new Date()
    };
    Client_Invoices(Data).save();
    callback('Invoice Created Successfully');
}

AdminController.Find_Invoices_Amount = function (values, callback) {
    var Subtotal_Amount = 0;
    values.ProductData.forEach(function (item) {
        item.Product_Total_Amount = item.Product_Price * item.Product_Quantity;
        Subtotal_Amount += item.Product_Total_Amount;
    });
    var GST_Amount = (values.GST_Percentage * Subtotal_Amount) / 100;
    var Total_Amount = Subtotal_Amount + GST_Amount;
    callback({
        ProductData: values.ProductData,
        Subtotal_Amount: Subtotal_Amount,
        GST_Amount: GST_Amount,
        Total_Amount: Total_Amount
    })
}

AdminController.List_All_Products = function (callback) {
    Products.find().exec(function (err, Result) {
        callback(Result);
    })
}
AdminController.Add_Product = function (values, callback) {
    var Data = {
        ProductID: uuid(),
        Product_Name: values.Product_Name,
        Product_Price: values.Product_Price
    }
    Products(Data).save();
    callback("Product Added Successfully");
}

AdminController.List_All_Clients = function (callback) {
    Clients.find().exec(function (err, Result) {
        callback(Result);
    })
}

AdminController.Add_Clients = function (values, callback) {
    var data = {
        ClientID: uuid(),
        Name: values.Name,
        PhoneNumber: values.PhoneNumber,
        EmailID: values.EmailID,
        GST_Number: values.GST_Number
    }
    Clients(data).save();
    callback('Saved Successfully');
}


module.exports = AdminController;