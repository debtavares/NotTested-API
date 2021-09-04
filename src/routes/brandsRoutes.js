const express = require('express')
const router = express.Router()
const controller = require('../controllers/brandsController')


router.get('/', controller.getAll)
router.get('/:id', controller.getList, controller.getOne)
router.post('/', controller.createOne)
router.patch('/:id', controller.getList, controller.updateOne)
router.delete('/:id', controller.getList, controller.deleteOne)


module.exports = router