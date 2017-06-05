const low = require('lowdb')
const db = low('data/db.json')
 
// Set some defaults if your JSON file is empty 
db.defaults({ content: [], user: {} })
  .write()
