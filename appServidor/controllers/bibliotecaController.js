const Biblioteca = require('../models/Libro');

exports.addBiblioteca = async (req, res) => {
    try {
        let biblioteca;
        //Crear la agencia
        biblioteca = new Biblioteca(req.body);
        await biblioteca.save();
        res.send(biblioteca);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el libro');
    }
};

exports.loadLibros = async (req, res) => {
    try {
        const libros = await Biblioteca.find();
        res.json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado de los libros');
    }
};

exports.loadLibro = async (req, res) => {
    try {
        let libro = await Biblioteca.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: 'No existe el pasaje' });
        }
        res.json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el registro del libro');
    }
};

exports.updateLibro = async (req, res) => {
    try {
        const { nombre, autor, editorial, precio, anioPublicacion, portada } = req.body;
        let libro = await Biblioteca.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro' });
        }
        libro.nombre = nombre;
        libro.autor = autor;
        libro.editorial = editorial;
        libro.precio = precio;
        libro.anioPublicacion = anioPublicacion;
        libro.portada = portada;

        libro = await Biblioteca.findOneAndUpdate({ _id: req.params.id }, libro, { new: true });
        res.json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el registro del libro');
    }
};

exports.deleteLibro = async (req, res) => {
    try {
        let libro = await Biblioteca.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro' });
        }
        await Biblioteca.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Libro eliminado con exito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el libro');
    }
};