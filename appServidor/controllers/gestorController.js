const Gestor = require('../models/Gestor');

exports.addGestor = async (req, res) => {
    try {
        let gestor;
        //Crear la agencia
        gestor = new Gestor(req.body);
        await gestor.save();
        res.send(gestor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el viaje');
    }
};

exports.loadGestores = async (req, res) => {
    try {
        const gestores = await Gestor.find();
        res.json(gestores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado de los pasajes');
    }
};

exports.loadGestor = async (req, res) => {
    try {
        let gestor = await Gestor.findById(req.params.id);
        if (!gestor) {
            res.status(404).json({ msg: 'No existe el pasaje' });
        }
        res.json(gestor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el registro del pasaje');
    }
};

exports.updateGestor = async (req, res) => {
    try {
        const { destino, precio } = req.body;
        let gestor = await Gestor.findById(req.params.id);
        if (!gestor) {
            res.status(404).json({ msg: 'No existe el pasaje' });
        }
        gestor.destino = destino;
        gestor.precio = precio;

        gestor = await Gestor.findOneAndUpdate({ _id: req.params.id }, gestor, { new: true });
        res.json(gestor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el registro del pasaje');
    }
};

exports.deleteGestor = async (req, res) => {
    try {
        let gestor = await Gestor.findById(req.params.id);
        if (!gestor) {
            res.status(404).json({ msg: 'No existe el pasaaje' });
        }
        await Gestor.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Pasaje eliminada con exito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el pasaje');
    }
};