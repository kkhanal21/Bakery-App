var config = require('config.json');
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
            //select query
            client.query('SELECT * FROM tbl_features where isenabled=true', (err, result) => {
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