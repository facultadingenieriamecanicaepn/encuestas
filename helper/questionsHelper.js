var Questions = require('../models/questions');

module.exports = function(){
	function createNewQuiz (req, callback){
		var questions = new Questions({
		  Nombre : req.body.Nombre,
		  Email : req.body.Email,
		  Tel : req.body.Tel,
		  TipoEmpresaPP : req.body.TipoEmpresaPP,
		  TipoEmpresa : req.body.TipoEmpresa,
		  DescripActividad : req.body.DescripActividad,
		  pregunta_1_1: req.body.pregunta_1_1,
		  pregunta_1_2: req.body.pregunta_1_2,
		  pregunta_1_3: req.body.pregunta_1_3,
		  pregunta_1_4: req.body.pregunta_1_4,
		  pregunta_1_5: req.body.pregunta_1_5,
		  pregunta_1_6: req.body.pregunta_1_6,
		  pregunta_2_1: req.body.pregunta_1_1,
		  pregunta_2_2: req.body.pregunta_2_2,
		  pregunta_2_3: req.body.pregunta_2_3,
		  pregunta_2_4: req.body.pregunta_2_4,
		  pregunta_3_1: req.body.pregunta_3_1,
		  pregunta_3_2: req.body.pregunta_3_2,
		  pregunta_3_3: req.body.pregunta_3_3,
		  pregunta_3_4: req.body.pregunta_3_4,
		  pregunta_4_1: req.body.pregunta_4_1,
		  pregunta_4_2: req.body.pregunta_4_2,
		  pregunta_4_3: req.body.pregunta_4_3,
		  pregunta_4_4: req.body.pregunta_4_4,
		  pregunta_4_5: req.body.pregunta_4_5,
		  pregunta_4_6: req.body.pregunta_4_6,
		  pregunta_4_7: req.body.pregunta_4_7,
		  pregunta_4_8: req.body.pregunta_4_8,
		  pregunta_5_1: req.body.pregunta_5_1,
		  pregunta_5_2: req.body.pregunta_5_2,
		  pregunta_5_3: req.body.pregunta_5_3,
		  pregunta_5_4: req.body.pregunta_5_4,
		  pregunta_5_5: req.body.pregunta_5_5,
		  pregunta_5_6: req.body.pregunta_5_6,
		  pregunta_5_7: req.body.pregunta_5_7,
		  pregunta_5_8: req.body.pregunta_5_8,
		  pregunta_6: req.body.pregunta_6,
		  pregunta_7_1: req.body.pregunta_7_1,
		  pregunta_7_2: req.body.pregunta_7_2,
		  pregunta_7_3: req.body.pregunta_7_3,
		  pregunta_7_4: req.body.pregunta_7_4,
		  pregunta_7_5: req.body.pregunta_7_5,
		  pregunta_7_6: req.body.pregunta_7_6,
		  pregunta_7_7: req.body.pregunta_7_7,
		  pregunta_7_8: req.body.pregunta_7_8,
		  pregunta_7_9: req.body.pregunta_7_9,
		  pregunta_7_10: req.body.pregunta_7_10,
		  pregunta_8: req.body.pregunta_8
		})
		questions.save(function (err){
			if (err) callback(err)
			else callback(null, questions)
		})
	}

	function findAllQuestions (callback){
		Questions.find(function (err, questions){
			if(err) callback(err)
			else callback(null, JSON.stringify(questions))
		})
	}

	

	return {
		createNewQuiz : createNewQuiz,
		findAllQuestions : findAllQuestions
	}
}
