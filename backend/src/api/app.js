const express = require('express');
require('express-async-errors');
const cors = require('cors');
const ErrorHandler = require('../middlewares/ErrorMiddleware');
const { userRouter } = require('../routers/index');

class App {
  constructor() {
    this.app = express();

    this.config();
    this.routes();
  }

  config() {
    const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(accessControl);
  }

  routes() {
    this.app.use('/users', userRouter);

    this.app.use(express.static('public'));    
    
    this.app.use(ErrorHandler.handle);
  }

  start(PORT) {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

module.exports = App;
