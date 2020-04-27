const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const NewsController = require('./controllers/NewsController');
const VideoController = require('./controllers/VideoController');
const GaleryController = require('./controllers/GaleryController');

const routes = Router();
const upload = multer(multerConfig);

routes.get('/news', NewsController.index);
routes.get('/news/:id', NewsController.show);
routes.post('/news', upload.single('newsImage'), NewsController.store);

routes.get('/videos', VideoController.index);
routes.get('/videos/:id', VideoController.show);
routes.post('/videos', VideoController.store);

routes.get('/galery', GaleryController.index);
routes.get('/galery/:id', GaleryController.show);
routes.post('/galery', upload.single('galeryImage'), GaleryController.store);

module.exports = routes;
