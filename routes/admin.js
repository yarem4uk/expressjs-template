import express from 'express';

const router = new express.Router();

router.use('/add-product', (req, res, next) => {
  console.log('in the another middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><buton type="submit">Add product</button></form>');
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
