var config = require('config.json');
var { Client } = require('pg');

var service = {};
//normal service
service.getAll = getAll;
service.create = insert;
service.update = update;
service.delete = _delete;
service.getById = getById;

module.exports = service;

function getAll(page) {
    return new Promise(function (resolve, reject) {
        const client = new Client({
            user: 'postgres',
            password: 'admin',
            host: 'localhost',
            port: '5432',
            database: 'project_bakery'
        })
        client.connect();

        var limit = 8;
        var offset = (page-1) * limit;
        //select query
        client.query('select * from tbl_products ORDER BY product_id OFFSET $1 limit $2', [offset, limit], (err, result) => {
            resolve(result.rows);
            client.end();
        })
    })
}
function insert() {

}
function update() {

}
function _delete() {

}
function getById() {

}