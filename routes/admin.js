import express from 'express';
import fs from 'fs';
import path from 'path';
import pathRoot from '../util/path';

const router = new express.Router();
let products = [];

router.get('/add-product', (req, res) => {
  res.render('add-product');
});

router.post('/add-product', (req, res) => {
  const p = path.join(pathRoot, 'data', 'product.json');
  fs.readFile(p, 'utf8', (err, data) => {
    products = JSON.parse(data);
    products.push({ title: req.body.title });
    fs.writeFile(p, JSON.stringify(products), (error) => {
      if (err) {
        console.log('error from write files', error);
      }
    });
  });
  res.redirect('/');
});

export default router;
