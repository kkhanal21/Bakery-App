
var list = [];
var group1 = [];

for (var i = 0; i < 24; i++) {
    var test = {
        name: "puzan" + i,
        addresss: "address" + i
    }

    list.push(i);
}

var createGroupedArray = function (arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
        // var newgroups = [], j;
        // for (j = 0; j < arr.length; j += chunkSize) {

        // }
    }
    return groups;
}

var groupedArr = createGroupedArray(list, 8);
//[[1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16],[17,18,19,20,21,22,23,24]]
var reducedresTo2 = createGroupedArray(groupedArr[0], 4);
var reducedresTo4 = createGroupedArray(reducedresTo2[0], 2);
var jarr = [], j;
for (j = 0; j < groupedArr.length; j++) {
    jarr.push(createGroupedArray(groupedArr[j], 4));
}

var karr = [], k;
for (k = 0; k < jarr.length; k++) {
    var l;
    for (l = 0; l < jarr[k].length; l++) {
        //       console.log("jarr[" + k + "][" + l + "]");
        karr.push(createGroupedArray(jarr[k][l], 2));
    }

}

// console.log(JSON.stringify(groupedArr));
//[[1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16],[17,18,19,20,21,22,23,24]]
// console.log(JSON.stringify(jarr));
//[[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]],[[17,18,19,20],[21,22,23,24]]]
// console.log(createGroupedArray(jarr[0][0], 2));
// console.log(createGroupedArray(jarr[0][1], 2));
// console.log(createGroupedArray(jarr[1][0], 2));
// console.log(createGroupedArray(jarr[1][1], 2));
// console.log(createGroupedArray(jarr[2][0], 2));
// console.log(createGroupedArray(jarr[2][1], 2));
// console.log(JSON.stringify(karr));
// console.log(JSON.stringify(groupedArr.length));
// console.log(JSON.stringify(karr[0].length));
// console.log(JSON.stringify(karr.length));




// console.log(JSON.stringify(groupedArr));
// console.log(JSON.stringify(reducedresTo2));
// console.log(JSON.stringify(reducedresTo4));
// for(var i=0;i<groupedArr.length;i++){    
//     console.log("group "+(i+1));
//     for(var j=0;j<groupedArr[i].length;j++){        
//         console.log(groupedArr[i][j]);
//     }
// }


// function createArray(length) {
//     var arr = new Array(length || 0),
//         i = length;

//     if (arguments.length > 1) {
//         var args = Array.prototype.slice.call(arguments, 1);
//         while(i--) arr[length-1 - i] = createArray.apply(this, args);
//     }

//     return arr;
// }
// var car = createArray(6,9);   
// console.log(car);

// var path = require('path');
// var express = require('express');
// var multer = require('multer');
// var { Client } = require('pg');
// var bodyparser = require('body-parser');
// var app = express();
// const port = 9090;

// app.use(express.static(path.join(__dirname, "dist")));
// //bodyparser
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({
//     extended: false
// }));

// var Storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, path.join(__dirname, "src/assets/files"));
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });

// var upload = multer({ storage: Storage }).array("file", 3); //Field name and max count


// app.get("/api/cake/getAll", (req, res) => {
//     const client = new Client({
//         user: 'postgres',
//         password: 'admin',
//         host: 'localhost',
//         port: '5432',
//         database: 'project_bakery'
//     })
//     client.connect();
//     //insert query
//     client.query('INSERT INTO tbl_categories(category_name) values($1)', ['check'], (err, res) => {
//         console.log('["resp":"success"]');
//     })
//     //update query
//     client.query('UPDATE tbl_categories SET category_name= $1 WHERE category_id=$2 ', ['puzan', 8], (err, res) => {
//         console.log('["resp":"success"]');
//     })
//     //delete query
//     client.query('DELETE FROM tbl_categories WHERE category_name= $1', ['check'], (err, res) => {
//         console.log('["resp":"success"]');
//     })
//     //select query
//     client.query('SELECT * FROM tbl_categories', (err, result) => {
//         res.json(result.rows);
//         client.end();
//     })
// });

// app.get("/api/cake/getfeatures", (req, res) => {
//     const client = new Client({
//         user: 'postgres',
//         password: 'admin',
//         host: 'localhost',
//         port: '5432',
//         database: 'project_bakery'
//     })
//     client.connect();
//     //insert query
//     // client.query('INSERT INTO tbl_categories(category_name) values($1)', ['check'], (err, res) => {
//     //     console.log('["resp":"success"]');
//     // })
//     //update query
//     // client.query('UPDATE tbl_categories SET category_name= $1 WHERE category_id=$2 ', ['puzan', 8], (err, res) => {
//     //     console.log('["resp":"success"]');
//     // })
//     //delete query
//     // client.query('DELETE FROM tbl_categories WHERE category_name= $1', ['check'], (err, res) => {
//     //     console.log('["resp":"success"]');
//     // })
//     //select query
//     client.query('SELECT * FROM tbl_features where isenabled=true', (err, result) => {
//         res.json(result.rows);
//         client.end();
//     })
// })

// app.post("/api/cake/save", (req, res) => {
//     console.log(req.body);
// });


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "dist/index.html"));
// });

// app.post("/api/Upload", function (req, res) {
//     upload(req, res, function (err) {
//         if (err) {
//             console.log(err);
//             return res.end("Something went wrong!");
//         }
//         console.log(req.body);
//         res.json([{ response: "File uploaded sucessfully!." }]);

//     });
// });

// app.listen(port, () => {   
//     console.log("server running at " + port);
// });



var list = [], i;
for (i = 0; i < 24; i++) {
    list.push(i);
}

var content = "";
for (i = 0; i < list.length; i++) {
    if ((i + 1) % 8 == 0) {
        content += "<div>";
        for (var j = 0; j < 2; j++) {
            content += `<div class="row">`;
            console.log(i - (i - j));
            for (var k = 0; k < 2; k++) {
                content += `<div class="col-md-6 onscroll-animate">`;
                content += `<div class="row">`;
                for (var l = 0; l < 2; l++) {
                    content += `<div class="col-md-6">`;
                    content += `<div class="product">`;
                    content += "i" + i;
                    content += `</div>`;
                    content += `</div>`;
                }
                content += `</div>`;
                content += `</div>`;
            }
            content += "</div>";
        }
        content += "</div>";
        console.log(content);
    }

}

