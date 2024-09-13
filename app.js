const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});

// const { MongoClient } = require("mongodb"); // Import MongoDB client

// // Replace <username>, <password>, and <your-database> with your actual values
// const uri =
//   "mongodb+srv://arturyyys:Astuoni88888888@cluster0.pozcl.mongodb.net/shop?retryWrites=true&w=majority&tls=true";

// async function testMongoConnection() {
//   try {
//     const client = new MongoClient(uri); // Create a new MongoClient instance

//     // Connect to the MongoDB cluster
//     await client.connect();
//     console.log("Connected successfully to MongoDB");

//     // Perform any desired operations
//     // For example, list databases
//     const databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach((db) => console.log(` - ${db.name}`));

//     // Close the connection
//     await client.close();
//   } catch (e) {
//     console.error("Connection failed", e); // Handle connection failure
//   }
// }

// // Call the function to test the connection
// testMongoConnection();
