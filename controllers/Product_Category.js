const db = require('../config/database.js');

const Product_CategoryController = {
    create(req,res){
        let post = {product_id:req.body.product_id, category_id:req.body.category_id};
        let sql = 'INSERT INTO product_category SET ?'
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('product_category added...')
        })
      },
    visual(req,res){
        let sql = 'SELECT * FROM product_category';
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result)
        })
    }
}

module.exports = Product_CategoryController;