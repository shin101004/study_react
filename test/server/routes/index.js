const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
    res.send({greeting:'Hello React x Node.js'});
})

module.exports = router;