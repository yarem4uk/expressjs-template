import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import shopRoutes from './routes/shop';
import adminRoutes from './routes/admin';

export default () => {
  const app = new Express();
  app.set('view engine', 'pug');
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(adminRoutes);
  app.use(shopRoutes);

  app.use((req, res, next) => {
    res.send('<h1>This is error page</h1>');
  });

  return app;
};
