var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var questionSchema = new Schema({
	Nombre : { type : String },
		  Email : { type : String},
		  Tel : {type : String},
		  TipoEmpresaPP : {type : String},
		  TipoEmpresa : {type : String},
		  DescripActividad : {type : String},
		  pregunta_1_1:  {type: String},
		  pregunta_1_2:  {type: String},
		  pregunta_1_3:  {type: String},
		  pregunta_1_4:  {type: String},
		  pregunta_1_5:  {type: String},
		  pregunta_1_6:  {type: String},
		  pregunta_2_1:  {type: String},
		  pregunta_2_2:  {type: String},
		  pregunta_2_3:  {type: String},
		  pregunta_2_4:  {type: String},
		  pregunta_3_1:  {type: String},
		  pregunta_3_2:  {type: String},
		  pregunta_3_3:  {type: String},
		  pregunta_3_4:  {type: String},
		  pregunta_4_1:  {type: String},
		  pregunta_4_2:  {type: String},
		  pregunta_4_3:  {type: String},
		  pregunta_4_4:  {type: String},
		  pregunta_4_5:  {type: String},
		  pregunta_4_6:  {type: String},
		  pregunta_4_7:  {type: String},
		  pregunta_4_8:  {type: String},
		  pregunta_5_1:  {type: String},
		  pregunta_5_2:  {type: String},
		  pregunta_5_3:  {type: String},
		  pregunta_5_4:  {type: String},
		  pregunta_5_5:  {type: String},
		  pregunta_5_6:  {type: String},
		  pregunta_5_7:  {type: String},
		  pregunta_5_8:  {type: String},
		  pregunta_6:  {type: String},
		  pregunta_7_1:  {type: String},
		  pregunta_7_2:  {type: String},
		  pregunta_7_3:  {type: String},
		  pregunta_7_4:  {type: String},
		  pregunta_7_5:  {type: String},
		  pregunta_7_6:  {type: String},
		  pregunta_7_7:  {type: String},
		  pregunta_7_8:  {type: String},
		  pregunta_7_9:  {type: String},
		  pregunta_7_10:  {type: String},
		  pregunta_8:  {type: String},
		  createdAt : { type : Date, default : Date.now}
	 	  
})




module.exports = mongoose.model('Questions', questionSchema)