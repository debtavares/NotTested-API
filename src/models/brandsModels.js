const mongoose = require('mongoose')

const brandsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    marca: { type: String, required: true }, 
    empresa: { type: String, required: true},
    tipo: { type: String, required: true},
    vegana: { type: Boolean, required: true }
},
{
   versionKey: false
})


module.exports = mongoose.model('brand', brandsSchema)