const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')

const db = low('data/db.json', {
  storage: fileAsync
})
db.read()            // reads db.json

const args = process.argv;
console.log(args);
console.log(args.length);

if (args.length == 3) {
    console.log("Pushing :"+args[2]);

  db.get("user").push(args[2])
  //.set('user.name', args[2])
  .write()
} else if (args.length == 4) {
  db.set(args[2], args[3])
  .write()
} else {
  console.log("Pass the name as argument")
}
