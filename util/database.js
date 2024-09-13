const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let_db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://arturyyys:Astuoni88888888@cluster0.pozcl.mongodb.net/shop?retryWrites=true"
  )
    .then((client) => {
      console.log("Connected to Mongo");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
