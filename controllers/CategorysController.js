const db = require('../config/database.js');

const CategorysController = {
    create(req,res){
        let post = {name:req.body.name};
        let sql = 'INSERT INTO category SET ?'
        db.query(sql,post,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('category added...')
        })
      },
    visual(req,res){
        let sql = 'SELECT * FROM category';
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result)
        })
    },
    update(req,res){
      let post = {name:req.body.name, id:req.body.id};
      let sql = `UPDATE category SET name = ? where id = ?`;
      db.query(sql,[post.name,post.id],(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('category update...')
      })
    },
    visualForId(req, res){
      let sql = `SELECT * FROM category WHERE id = ${req.params.id}`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    },
}

module.exports = CategorysController;