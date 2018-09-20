var config = require('config.json');
var express = require('express');
var router = express.Router();
var productService = require('services/products.service');
var multer = require('multer');

//feature routes 
router.get('/', getAll);
router.post('/insert', insert);
router.post('/order', order);
router.put('/:_id', update);
router.delete('/:_id', _delete);
router.get('/:_id', getById);

module.exports = router;

//multer storage support
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./files");
    },
    filename: function (req, file, callback) {
        console.log(file.originalname);
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({ storage: Storage }).array("file", 3); //Field name and max count

function getAll(req, res) {
    console.log(req.query.page);
    productService.getAll(req.query.page)
        .then(function (products) {
            res.send(products);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function insert(req, res) {
}
function order(req, res) {
    console.log(req.body);
}
function getById(req, res) {
}
function update(req, res) {
}
function _delete(req, res) {
}


