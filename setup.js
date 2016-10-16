//-----------------------------------------------------
//    SCRIPT FOR SETTING UP PROJECT 
//    
//    1. Migrate/sync database (check db credentials)
//-----------------------------------------------------
var DB  = require('./models/db');


console.log("Setting up database");
DB.sync(true);