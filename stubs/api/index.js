const router = require('express').Router();
const plantsRouter = require('express').Router();
module.exports = router;


router.use('/plants',plantsRouter)