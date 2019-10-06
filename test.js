const database = require("./server/database");

var instance1 = database.getDb();
var instance2 = database.getDb();

if (instance1 === instance2) {
  console.log("the same");
} else {
  console.log("aw");
}
