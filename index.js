const express = require("express");
const app = express();
const PORT = 3000
app.use(express.json())
const db = require("./config/database")
app.use('/products', require('./routes/products'));
app.use('/category', require('./routes/category'));
app.use('/product_category', require('./routes/product_category'));


app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE productsdb';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Database created...')
  })
})

app.get('/createproducttable', (req, res) => {
  let sql = `CREATE TABLE product(
              id INT AUTO_INCREMENT,
              name VARCHAR(255),
              price FLOAT,
              description VARCHAR(255),
              PRIMARY KEY(id))`
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('products table created...')
  })
})

app.get('/createcategorytable', (req, res) => {
  let sql = `CREATE TABLE category(
              id INT AUTO_INCREMENT,
              name VARCHAR(255),
              PRIMARY KEY(id))`
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('category table created...')
  })
})

app.get('/createproduct_categorytable', (req, res) => {
  let sql = `CREATE TABLE product_category (
    id INT AUTO_INCREMENT,
    product_id INT,
    category_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES category(id)
  )`
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('product_category table created...')
  })
})

app.listen(PORT, () => console.log("Servidor levantado en puerto " + PORT))

