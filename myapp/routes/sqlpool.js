var mysql = require('mysql');

var pool = require('generic-pool').Pool({
	name : 'mysql',
	create : function(callback) {
        var c = mysql.createConnection({
        	host : '127.0.0.1',
        	port : 3306,
            user : 'root',
            password : '000000',
            database : 'mydb'
        })
        // parameter order: err, resource
        callback(null, c);
	},
	destroy : function(clinet){
		client.end();
	},
	max : 10,
	min : 2,
	idleTimeoutMillis : 30000,
	log : true
});

module.exports = pool;