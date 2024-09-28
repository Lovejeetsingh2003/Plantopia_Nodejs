const routes = require('express').Router();

const topPickController = require('../controller/top_picks_controller')

routes.post('/addtoppick',topPickController.addTopPick);

routes.post('/updatetoppick',topPickController.updateTopPick);

routes.post('/deletetoppick',topPickController.deleteFromTopPick);


module.exports = routes;