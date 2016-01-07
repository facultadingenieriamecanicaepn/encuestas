var express = require('express');
var router = express.Router();

var Questions = require('../helper/questionsHelper')
var questionsdb = Questions();

/* GET home page. */
router.get('/', function(req, res) {
 res.render('index', { title: 'Express' });
});

router.get('/success', function(req, res) {
  res.render('success');
});

createNewQuiz = function (req, res){
	console.log(req.body)
	questionsdb.createNewQuiz( req, function (err, questions){
		if(err) res.send(err)
		else res.render('success');
	})
}

findAllQuestions = function (req,  res){
	questionsdb.findAllQuestions(function (err, questions){
		if(err) res.send(err)
		else res.send(questions)
	})
}

router.post('/question', createNewQuiz)
router.get('/questions', findAllQuestions)

module.exports = router;
