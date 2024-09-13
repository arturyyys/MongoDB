const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://arturyyys:Astuoni88888888@cluster0.pozcl.mongodb.net/" // Ensure your connection string is correct
  )
    .then((client) => {
      console.log("Connected to Mongo");
      _db = client.db(); // Store the database object
      callback(client); // Invoke callback with client
    })
    .catch((err) => {
      console.error("Connection to MongoDB failed:", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db; // Return the database object if available
  throw new Error("No database found!"); // Throw an error if database is not connected
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
