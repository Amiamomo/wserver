var express = require('express');
var router = express.Router();

// database setup
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')

const db = low('data/db.json', {
  storage: fileAsync
})

/* GET contents listing. */
router.get('/', function(req, res, next) {
  var res1 =  db.get("contents");
  res.body = res1;
  res.send(res1);
});

/* POST contents listing. */
router.post('/', function(req, res, next) {
  console.log(req.body) ;
  res.send(req.body);
}); 



module.exports = router;
