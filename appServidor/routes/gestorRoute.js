//Rutas para el esquema de Agencias
const express = require('express');
const router = express.Router();
const gestorController = require('../controllers/gestorController');

//api/agencias
router.post('/', gestorController.addGestor);
router.get('/', gestorController.loadGestores);
router.put('/:id', gestorController.updateGestor);
router.get('/:id', gestorController.addGestor);
router.delete('/:id', gestorController.deleteGestor);

module.exports = router;