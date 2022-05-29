const express = require('express');
const crudController = require('./crud');
const router = express.Router();
const Floor = require('../models/floorModel')

router.post("", crudController(Floor).Post)
router.get("", crudController(Floor).Get)
router.get("/:id", crudController(Floor).GetOne)
router.delete('/:id', crudController(Floor).Delete)
router.patch("/:id", crudController(Floor).Patch)
module.exports = router