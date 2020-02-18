/* Reading and writing data:
https://mongodb.github.io/node-mongodb-native/3.5/tutorials/crud/

CRUD: Create Read Update Delete

- collection.insertOne({...})
- collection.insertMany([{...}, ])
*/
const MongoClient = require('mongodb').MongoClient;

function write(url, data) {
    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function(err) {
        // This will create a `cassettes` collection if one doesn't exist. In
        // general, mongo will create a collection if you reference one that
        // doesn't yet exist. Likewise, if you ask for the quantity of a
        // model that doesn't exist, it will just say 0.
      const collection = client.db("test").collection("cassettes");
      if (Array.isArray(data)) {
        collection.insertMany(data);
      } else {
        collection.insertOne(data);
      }
      client.close();
    })
}

function read(url, callback) {
    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function(err) {
      const collection = client.db("test").collection("cassettes");
      return collection.find({}).toArray(callback);
  })
}

exports.write = write
exports.read = read
