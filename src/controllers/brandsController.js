const mongoose = require('mongoose')
const Brand = require('../models/brandsModels')

//Mostrar todos as marcas
const getAll = async (req, res) => {
    try {
        const list = await Brand.find()
        res.json(list)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

//Mostrar uma
const getOne = async (req, res) => {
    res.send(res.list)

}

//Criar uma
const createOne = async (req, res) => {
    const list = new Brand({
        _id: new mongoose.Types.ObjectId(),
        marca: req.body.marca,
        empresa: req.body.empresa,
        tipo: req.body.tipo,
        vegana: req.body.vegana,
    })

    try {
        const newList = await list.save()
        res.status(201).json(newList)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}

//Atualizar uma
const updateOne = async (req, res) => {
    if (req.body.marca != null) {
        res.list.marca = req.body.marca
    }

    try {
        const updateList = await res.list.save()
        res.json(updateList)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}


//Deletar um
const deleteOne = async (req, res) => {
    try {
        await res.list.remove()
        res.json({message: 'Marca deletada!'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

//função "marca nao encontrada"
async function getList(req,res,next){
    let list
    try {
        list = await Brand.findById(req.params.id)
        if (list == null) {
            return res.status(404).json({message: 'Marca não encontrada'})
        }

    } catch (err) {
        return res.status(500).json({message: err.message})

    }

    res.list = list
    next()

}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, getList }