var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	var conn = res.locals.connection;
	conn.query('SELECT * from registro', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({results}));
	});
});


router.post('/', function(req, res, next) {
	//res.send(req.body);
	res.locals.connection.query('INSERT INTO  registro(nome,telefone) VALUES (?,?)',[req.body.nome,req.body.telefone], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({results}));
	});
});


router.put('/:id', function(req, res, next) {
	//res.send(req.body);
	res.locals.connection.query('UPDATE registro SET nome = ?,telefone=? WHERE id=?',[req.body.nome,req.body.telefone,req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({results}));
	});
});

router.get('/:id', function(req, res, next) {
	//res.send(req.body);
	res.locals.connection.query('SELECT * from registro where id=?',[req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({results}));
	});
});

router.delete('/:id', function(req, res, next) {
	//res.send(req.body);
	res.locals.connection.query('DELETE from registro where id=?',[req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({results}));
	});
});


module.exports = router;
