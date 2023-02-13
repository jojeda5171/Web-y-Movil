const Course = require("../models/Course")

exports.addCourse = async(req, res) => {
    try
    {
        let course
        //Crear el curso
        course = new Course(req.body)
        await course.save()
        res.send(course)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al registrar el curso')
    }
}

exports.loadCourses = async(req,res) => {
    try
    {
        const courses = await Course.find()
        res.json(courses)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado')        
    }
}

exports.loadCourse = async(req,res) => {
    try{
        let course = await Course.findById(req.params.id)
        if(!course){
            res.status(404).json({msg: 'No existe el curso'})
        }
        res.json(course)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el registro')        
    }
}

exports.updateCourse = async(req,res) => {
    try{
        const {name, subtitle, description, duration, urlImage} = req.body
        let course = await Course.findById(req.params.id)
        if(!course){
            res.status(404).json({msg: 'No existe el curso'})
        }
        course.name = name
        course.subtitle = subtitle
        course.description = description
        course.duration = duration
        course.urlImage = urlImage
        
        course = await Course.findOneAndUpdate({ _id:req.params.id}, course, {new:true})
        res.json(course)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el registro')        
    }
}

exports.deleteCourse = async(req,res) => {
    try{
        let course = await Course.findById(req.params.id)
        if(!course){
            res.status(404).json({msg: 'No existe el curso'})
        }
        await Course.findOneAndRemove({ _id:req.params.id})
        res.json({msg: 'Curso eliminado con éxito'})        
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el registro')        
    }   
}