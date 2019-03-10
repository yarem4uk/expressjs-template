import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export default () => {
  const app = new Express();
  app.set('view engine', 'pug');
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/add-product', (req, res, next) => {
    console.log('in the another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><buton type="submit">Add product</button></form>');
  });

  app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

  app.use('/', (req, res, next) => {
    res.send('<h1>hello from express</h1>');
  });

  return app;
};
