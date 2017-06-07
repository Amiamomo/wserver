var express = require('express');
var router = express.Router();

// database setup
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')

const db = low('data/db.json', {
  storage: fileAsync
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 
/* POST users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body) 
    db.get("contents").push({req:req.body, title:'Uck'})
  //.set('user.name', args[2])
  .write()
  res.send(req.body);
}); 



module.exports = router;
