const express = require('express')
const router = express.Router()
const controller = require('../controllers/brandsController')


router.get('/', controller.getAll, controller.auth)
router.get('/:id', controller.getOne, controller.getList, controller.auth)
router.post('/', controller.createOne, controller.auth)
router.patch('/:id', controller.updateOne, controller.getList, controller.auth)
router.delete('/:id', controller.deleteOne, controller.getList, controller.auth)


module.exports = router