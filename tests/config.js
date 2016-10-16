var config = require('config');

console.log("Testing config...");

var dbConfig = config.get('dbConfig');

console.log("---------- dbConfig ----------");
console.log("dbName . . : " + dbConfig.dbName);
console.log("username . : " + dbConfig.username);
console.log("password . : " + dbConfig.password);
