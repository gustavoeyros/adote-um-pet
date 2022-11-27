const router = require('express').Router()

const PetController = require('../controllers/PetController')
const { imageUpload } = require('../helpers/image-upload')

//middlewares
const verifyToken = require('../helpers/verify-token')

router.post('/create', verifyToken, imageUpload.array('images'), PetController.create)
router.get('/', PetController.getAll)

module.exports = router