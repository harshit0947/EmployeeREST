const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Employees', (err, db) =>{
    if(err){
         return console.log('Unablt to connect to database')
    }
console.log('Connected to mongodb server');
db.close();
});
