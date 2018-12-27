var express = require('express');
var router = express.Router();
var AdminController = require('../Controllers/AdminController.js');
var ClientController = require('../Controllers/ClientController');
router.post('/Client_Bill_Pay',function (req,res){
    ClientController.Client_Bill_Pay(req.body, function(Result){
        res.send(Result);
    })
})

router.post('/Get_All_Client_Invoices', function (req, res) {
    ClientController.Get_All_Client_Invoices(req.body, function(Result){
        res.send(Result)
    })
})


router.get('/Get_All_Invoices', function (req, res) {
    AdminController.Get_All_Invoices(function (Result) {
        res.send(Result);
    })
})

// let Invoices_Amount = AdminController.Find_Invoices_Amount(req.body);
// AdminController.Create_Client_Invoice(req.body, Invoices_Amount);
router.post('/Create_Client_Invoice', function (req, res) {
    AdminController.Find_Invoices_Amount(req.body, function (Invoices_Amount) {
        AdminController.Create_Client_Invoice(req.body, Invoices_Amount, function (Result) {
            res.send(Result);
        })
    })
});

router.get('/List_All_Products', function (req, res) {
    AdminController.List_All_Products(function (Result) {
        res.send(Result);
    })
})

router.post('/Add_Product', function (req, res) {
    AdminController.Add_Product(req.body, function (Result) {
        res.send(Result);
    })
})

router.get('/List_All_Clients', function (req, res) {
    AdminController.List_All_Clients(function (Result) {
        res.send(Result);
    })
})


router.post('/Add_Clients', function (req, res) {
    AdminController.Add_Clients(req.body, function (Result) {
        res.send(Result);
    })
})

module.exports = router;