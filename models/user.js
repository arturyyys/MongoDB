const mongodb = require("mongodb");
const db = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }
  static findByPk(userId) {
    const db = getDb();
    return db.collection("users").findOne({ _id: new ObjectId(userId) });
    // .next()
    // .then((user) => {
    //   if (user) {
    //     user._id = user._id.toString();
    //   }
    //   return user;
    // });
  }
}

module.exports = User;
