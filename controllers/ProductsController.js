const db = require('../config/database.js');

const ProductsController = {
    create(req,res){
        let post = {name:req.body.name, price:req.body.price, description:req.body.description};
        let sql = 'INSERT INTO products SET ?'
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('product added...')
        })
      },
    visual(req,res){
        let sql = 'SELECT * FROM products';
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result)
        })
    },
    update(req,res){
      let post = {name:req.body.name, price:req.body.price, description:req.body.description, id:req.body.id};
      let sql = `UPDATE products SET name = ?, price = ?, description = ? where id = ?`;
      db.query(sql,[post.name,post.price,post.description,post.id],(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('product update...')
      })
    },
    visualProductsWithCategories(req,res){
      let sql = `SELECT products.name as product, category.name as category FROM product_category
                 INNER JOIN products ON product_category.product_id = products.id 
                 INNER JOIN category ON product_category.category_id = category.id`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    },
    visualForId(req, res){
      let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    },
    visualDesc(req, res){
      let sql = `SELECT * FROM products order by price desc`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    },
    visualForName(req, res){
      let sql = `SELECT * FROM products WHERE name = '${req.params.name}'`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    },
    deleteForId(req, res){
      let sql = `delete FROM products WHERE id = '${req.params.id}'`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    },
    
}

module.exports = ProductsController;