const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        "title": "Not Tested",
        "description": "O Not Tested é uma API com banco de dados criada com o objetivo de reunir as marcas nacionais que não fazem testes em animais.",
        "version": "1.0.0"
    })
})

module.exports = router