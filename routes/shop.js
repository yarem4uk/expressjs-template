import express from 'express';

const router = new express.Router();

router.use('/', (req, res, next) => {
  res.send('<h1>hello from express</h1>');
});

export default router;
