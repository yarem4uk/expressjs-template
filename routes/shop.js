import express from 'express';
import fs from 'fs';
import path from 'path';
import pathRoot from '../util/path';

const router = new express.Router();

router.get('/', (req, res) => {
  const p = path.join(pathRoot, 'data', 'product.json');
  const data = fs.readFileSync(p, 'utf8');
  const products = JSON.parse(data);
  console.log(res.query);
  console.log(products);
  res.render('shop', { products });
});

export default router;
