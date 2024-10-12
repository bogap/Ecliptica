const express = require('express');
const cors = require('cors');

const plantsRouter = require('./plants/getPlants');
const calendarRouter = require('./plants_calendar/index');

const router = require('express').Router();

module.exports = router;

router.use('/plants',plantsRouter)
router.use('/plants_calendar',calendarRouter)
