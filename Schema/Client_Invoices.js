var mongoose = require('mongoose');
var Client_Invoices = mongoose.Schema({
    InvoiceID: { type: String, default: "" },
    ClientID: { type: String, default: "" },
    Name: { type: String, default: "" },
    PhoneNumber: { type: Number, default: 0 },
    EmailID: { type: String, default: "" },
    GST_Number: { type: String, default: "" },
    ProductData: [{
        ProductID: { type: String, default: "" },
        Product_Name: { type: String, default: "" },
        Product_Price: { type: Number, default: 0 },
        Product_Quantity: { type: Number, default: 0 },
        Product_Total_Amount: { type: Number, default: 0 }
    }],
    Subtotal_Amount: { type: Number, default: 0 },
    GST_Percentage: { type: Number, default: 0 },
    GST_Amount: { type: Number, default: 0 },
    Total_Amount: { type: Number, default: 0 },
    Whether_Amount_Paid: { type: Boolean, default: false },
    Invoice_Date: { type: Date, default: null }
}, { collection: 'Client_Invoices' });
module.exports = mongoose.model('Client_Invoices', Client_Invoices);