const { connect } = require('../data/database')
const mongoose = require('mongoose')
const Brand = require('../models/brandsModels')

connect()

const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

//Mostrar todos as marcas
const getAll = async (req, res) => {

        try {
            const brands = await Brand.find()
            res.json(brands)
        } catch (err) {
            res.status(500).json({message: err.message})
        }
      }

//Mostrar uma
const getOne = async (req, res) => {
    res.send(res.brands)

}

//Criar uma
const createOne = async (req, res) => {
    const brands = new Brand({
        _id: new mongoose.Types.ObjectId(),
        marca: req.body.marca,
        empresa: req.body.empresa,
        tipo: req.body.tipo,
        vegana: req.body.vegana,
    })

    try {
        const newList = await brands.save()
        res.status(201).json(newList)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}

//Atualizar uma
const updateOne = async (req, res) => {
    if (req.body.marca != null) {
        res.brands.marca = req.body.marca
    }

    try {
        const updateList = await res.brands.save()
        res.json(updateList)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}


//Deletar uma
const deleteOne = async (req, res) => {
    try {
        await res.brands.remove()
        res.json({message: 'Marca deletada!'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

//função "marca nao encontrada"
async function getList(req,res,next){
    let brands
    try {
        brands = await Brand.findById(req.params.id)
        if (brands == null) {
            return res.status(404).json({message: 'Marca não encontrada'})
        }

    } catch (err) {
        return res.status(500).json({message: err.message})

    }

    res.brands = brands
    next()

}

async function auth (req, res) {
    const authHeader = req.get("Autorização")

    if (!authHeader) {
      return res.status(401).send("Precisa de um login!")
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.status(403).send("Invalid token!")
      }

      return token
    })
  }

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, getList, auth }