const express = require('express')
const router = express.Router()

const parcelController = require('../controller/parcelController')

router.get('/', parcelController.getParcels)
router.get('/:pid', parcelController.getAParcel)
router.post('/', parcelController.createParcel)
router.put('/:id', parcelController.updateParcel)
router.delete('/:pid', parcelController.deleteAParcel)

module.exports = router