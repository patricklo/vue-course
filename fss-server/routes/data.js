var express = require('express')
var router = express.Router()


router.post('/formData',function(req,res,next){
	console.log("formData:"+req.body)
})

module.exports = router
