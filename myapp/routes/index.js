var express = require('express');
var router = express.Router();

// var mysql = require('mysql');

var pool = require('./sqlpool');

// var connection = mysql.createConnection({
//   host : '127.0.0.1',
//   port : 3306,
//   user : 'root',
//   password : '000000',
//   database : 'mydb'
// });



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'aaaaa' , pop : 'sender'});
// });


router.get('/test', function(req, res){
  pool.acquire(function(err, client){
            client.query("select * from user", [], function(err, rows) {
            console.log(rows);
            pool.release(client);
        });
  });
});


router.get('/pool' , function(req ,res){
  connection.connect();
  connection.query('SELECT name FROM user WHERE age = 12', function selectdc(err, results , fields){
  console.log(results);
  res.send(results);
  connection.end();
  });
});

router.get('/insert', function(req, res){
  var parames = [req.query.name, req.query.age ,req.query.num , req.query.address];
  console.log(parames);
  connection.query('INSERT INTO user (name, age ,num, address) VALUES(? , ? , ? , ?)', parames, function insertfun (err ,results, fields){
    res.send(err);
  });
});

module.exports = router;
