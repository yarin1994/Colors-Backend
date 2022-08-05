const express = require("express");
const api = require('../color-api');

const router = express.Router();


// Get All Colors
router.get("/", api.getColors);

//Updating Color Votes
router.put('/:cid', api.updateColor);

module.exports = router;
