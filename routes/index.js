var express = require('express');
var router = express.Router();

var Questions = require('../helper/questionsHelper')
var questionsdb = Questions();
const exec = require('child_process').exec;




/* GET home page. */
router.get('/', function (req, res) {
 res.render('index', { title: 'Express' });
});

router.get('/exportData', function (req, res){
	const child = exec('mongoexport --csv --host localhost:27017 --db questions1 --collection questions --fields _id,Nombre,Email,Tel,TipoEmpresaPP,TipoEmpresa,DescripActividad,pregunta_1_1,pregunta_1_2,pregunta_1_3,pregunta_1_4,pregunta_1_5,pregunta_1_6,pregunta_2_1,pregunta_2_2,pregunta_2_3,pregunta_2_4,pregunta_3_1,pregunta_3_2,pregunta_3_3,pregunta_3_4,pregunta_4_1,pregunta_4_2,pregunta_4_3,pregunta_4_4,pregunta_4_5,pregunta_4_6,pregunta_4_7,pregunta_4_8,pregunta_5_1,pregunta_5_2,pregunta_5_3,pregunta_5_4,pregunta_5_5,pregunta_5_6,pregunta_5_7,pregunta_5_8,pregunta_6,pregunta_7_1,pregunta_7_2,pregunta_7_3,pregunta_7_4,pregunta_7_5,pregunta_7_6,pregunta_7_7,pregunta_7_8,pregunta_7_9,pregunta_7_10,pregunta_8,createdAt -o output.csv',
	  (error, stdout, stderr) => {
	    console.log(`stdout: ${stdout}`);
	    console.log(`stderr: ${stderr}`);
	    if (error !== null) {
	      console.log(`exec error: ${error}`);
	    }else{
	    	res.download('./output.csv')
	    }
	});
});


router.get('/success', function(req, res) {
  res.render('success');
});

router.get('/login', function(req, res) {
  res.render('login', {});
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
