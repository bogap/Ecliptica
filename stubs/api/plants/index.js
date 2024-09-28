const plantsRouter = require('express').Router();

module.exports = plantsRouter(undefined, undefined, undefined);

plantsRouter.get('/list', (req, res) => {
    res.send(
        require('./plantList.json')
    );
})

plantsRouter.get('/:id', (req, res) => {
    res.send(
        require('./plant.json')
    )
})

plantsRouter.delete('/:id', (req, res) => {
    res.status(201).send()
    {
    }
})