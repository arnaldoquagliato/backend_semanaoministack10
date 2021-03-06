    const { Router } = require('express');

    const devController = require('./controllers/DevControllers'); 
    const searchController = require('./controllers/SearchController'); 



    const routes = Router();    

    routes.get('/devs', devController.index);
    routes.post('/devs', devController.store);

    routes.get('/search', searchController.index);


    

    module.exports = routes;   