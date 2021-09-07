const mongoose = require('mongoose')
const lista = require('../models/brandsModels')

const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const getAll = async (req, res) => {
    try {
        const brands = await lista.find()
            res.json(brands)
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    }

const getOne = async (req, res) => {
    try {
        const findBrand = await lista.findById(req.params.id)
        res.json(findBrand)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const createOne = async (req, res) => {
    const brands = new lista({
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

const updateOne = async (req, res) => {
    try {
        const findBrand = await lista.findById(req.params.id)

        if (req.body.marca != null) {
            findBrand.marca = req.body.marca
        }
        if (req.body.empresa != null) {
            findBrand.empresa = req.body.empresa
        }
        if (req.body.tipo != null) {
            findBrand.tipo = req.body.tipo
        }
        if (req.body.vegana != null) {
            findBrand.vegana = req.body.vegana
        }

        const updateBrand = await findBrand.save()
        res.status(200).json(updateBrand)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const deleteOne = async (req, res) => {
    try {
        const deleteBrand = await lista.findById(req.params.id)
        const removed = await deleteBrand.remove()
        
        res.status(200).json({
            "mensagem": "Marca deletada",
            removed})

    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

async function getList(req,res,next){
    let brands
    try {
        brands = await lista.findById(req.params.id)
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