var express = require('express');
var router = express.Router();


var Students = require('../helper/studentHelper')
var studentdb = Students()

createStudent = function(req, res){
	studentdb.createStudent(req, function (err, student) {
		if (err) res.send(err)
		else res.redirect('../../listStudents')
	})
}

findAllStudents = function(req, res){
	studentdb.findAllStudents(function (err, students) {
		if (err) res.send(err)
		else res.send(students)
	})
}

findIdStudent = function(req, res){
	studentdb.findIdStudent(req.params.id, function (err, student) {
		if (err) res.send(err)
		else res.send(student)
	})
}

updateStudents = function(req, res){
	studentdb.updateStudent(req, function (err, student) {
		if (err) res.send(err)
		else res.send(student)
	})
}

deleteStudents = function(req, res){
	studentdb.deleteStudent(req, function (err, student) {
		if (err) res.send(err)
		else res.redirect('../../listStudents')/*res.send('The student was delete')*/
	})
}

// POST create a Student
router.post('/student', createStudent)

/* GET students listing. */
router.get('/students', findAllStudents);

// GET - find a student with a specific ID
router.get('/students/:id', findIdStudent)

// PUT - Update a register already exist for Student

router.put('/students/:id', updateStudents)

// DELETE - delete a register from student
router.delete('/students/:id', deleteStudents)

router.get('/delete/:id', deleteStudents)

module.exports = router;
