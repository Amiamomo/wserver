const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')

const db = low('data/db.json', {
  storage: fileAsync
})
//db.defaults({ contents: [], user: {} })  .write()

const args = process.argv;
console.log(args);
console.log(args.length);

var collection = db.get("contents");
console.log(collection.value());
console.log("______________");
  
if (args.length == 2) {
  console.log("No arg, just display get 1st contents :");
  console.log(collection.first().value());
  
} else if ((args.length == 3) && (args[2] == "del")) {
  console.log("Delete :"+args[2]);
  collection.remove({"_id":1}).write();
  console.log("_____ After remove _________");
  console.log(collection.value());

} else if (args.length == 4) {
  db.set(args[2], args[3])
  .write()
} else {
  console.log("Pass the name as argument")
}
