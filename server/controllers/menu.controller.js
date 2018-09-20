var config = require('config.json');
var express = require('express');
var router = express.Router();
var menuService = require('services/menu.service');
var multer = require('multer');

router.get('/', getAll);
router.post('/insert', insert);
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
    //req.query.page
    menuService.getAll()
        .then(function (featured) {            
           res.send(featured);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function insert(req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.end("Something went wrong!");
        }
        console.log(req.body);
        //res.json([{ response: "File uploaded sucessfully!." }]);        
    });
    //  productService.saveFeatured(req.body)
    //     .then(function (users) {
    //         // upload(req, res, function (err) {
    //         //     if (err) {
    //         //         console.log(err);
    //         //         return res.end("Something went wrong!");
    //         //     }
    //         //     console.log(req.body);
    //         //     //res.json([{ response: "File uploaded sucessfully!." }]);
    //         //     res.send(users);
    //         // });

    //     })
    //     .catch(function (err) {
    //         res.status(400).send(err);
    //     });
}
function update(req, res) {
    menuService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function _delete(req, res) {
    menuService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function getById(req, res) {
    menuService.getById(req.user)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

