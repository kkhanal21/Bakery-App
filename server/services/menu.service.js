var config = require('config.json');
// var mail=require('./mail.service');
var Q = require('q');
var { Client } = require('pg');

var service = {};
//normal service
service.getAll = getAll;
service.create = insert;
service.update = update;
service.delete = _delete;
service.getById = getById;

module.exports = service;

function getAll() {

    return new Promise(function (resolve, reject) {
        const client = new Client({
            user: 'postgres',
            password: 'admin',
            host: 'localhost',
            port: '5432',
            database: 'project_bakery'
        })
        client.connect();
        // var limit = 10;
        // var offset = (page-1) * limit;
        //select query
        client.query('select * from tbl_menus ORDER BY menu_id', (err, result) => {
//            var records = formatArr(result.rows);
            resolve(result.rows);
            client.end();
        })
    })
}

function insert(featured) {

    return new Promise(function (resolve, reject) {
        const client = new Client({
            user: 'postgres',
            password: 'admin',
            host: 'localhost',
            port: '5432',
            database: 'project_bakery'
        })
        client.connect();
        //select query
        client.query('insert into tbl_features ()', (err, result) => {
            resolve(result.rows);
            client.end();
        })
    })

}
function update(_id, userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username,
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}
function _delete(_id) {
    var deferred = Q.defer();

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}
function getById(_id) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function createGroupedArray(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}

function formatArr(arr) {
    var chunk1 = createGroupedArray(arr, 8); // 24 => 8 8 8
    var jarr = [], j;
    for (j = 0; j < chunk1.length; j++) {
        jarr.push(createGroupedArray(chunk1[j], 2));
    }

    var karr = [], k;
    for (k = 0; k < jarr.length; k++) {
        var l;
        karr.push(createGroupedArray(jarr[k], 2));
    }
    return karr;
}