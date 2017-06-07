var express = require('express');
var router = express.Router();
// database setup
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')

const db = low('data/db.json', {
  storage: fileAsync
})

/*
 * DELETE entry.
 */

router.post('', function(req, res) {
  console.error("delete_content: <<<<");
  console.error('Request Type:', req.method);
  console.error('Request URL:', req.originalUrl);
    console.error('Request params:', req.params);
  var contentsToDelete = req.params.id;
  console.error('ID:', contentsToDelete);
  var collection = db.get('contents');
  console.error('db.get size:'+collection.size());
  console.error('db.get size:'+collection.value());
  var filter = { "_id" : contentsToDelete };
  console.log("filter:");
  console.log(filter);
  collection.remove(filter, function(err) {
    console.error('remove error:');
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  }).write();
  console.error('after remove:'+collection.size());
  res.send(req.body);
});

function myown_deletehandler  (req, res, next) {
  console.error('Request Type:', req.method);
  console.error('Request URL:', req.originalUrl);
  var contentsToDelete = req.params.id;
  console.error('ID:', contentsToDelete);
  var collection = db.get('contents');
  console.error('db.get size:'+collection.size());
  console.error('db.get size:'+collection.value());
  var filter = { "_id" : contentsToDelete };
  console.log("filter:");
  console.log(filter);
  collection.remove(filter, function(err) {
    console.error('remove error:');
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  }).write();
  console.error('after remove:'+collection.size());
  res.send(req.body);

}

module.exports = myown_deletehandler;
//module.exports = router;
