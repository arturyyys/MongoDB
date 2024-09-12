const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://arturyyys:Astuoni88888888@cluster0.pozcl.mongodb.net/"
  )
    .then((client) => {
      console.log("Connected to Mongo");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
