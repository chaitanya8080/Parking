


const express = require("express");
const res = require("express/lib/response");
const crud = require("./crud")
const User = require("../models/userModel")

const router = express.Router()


router.post("",crud(User).Post);
router.get("",crud(User).Get);
router.get("/:id",crud(User).GetOne);
router.delete("/:id",crud(User).Delete);
router.patch("/:id",crud(User).Patch);


module.exports = router;