//Rutas para el esquema de Curso
const express = require('express')
const router = express.Router()
const courseController = require('../controllers/courseController')

//api/cursos
router.post('/', courseController.addCourse)
router.get('/',courseController.loadCourses)
router.put('/:id',courseController.updateCourse)
router.get('/:id',courseController.loadCourse)
router.delete('/:id',courseController.deleteCourse)

module.exports = router