//Rutas para el esquema de Agencias
const express = require('express');
const router = express.Router();
const libroController = require('../controllers/bibliotecaController');

//api/agencias
router.post('/', libroController.addBiblioteca);
router.get('/', libroController.loadLibros);
router.put('/:id', libroController.updateLibro);
router.get('/:id', libroController.loadLibro);
router.delete('/:id', libroController.deleteLibro);

module.exports = router;