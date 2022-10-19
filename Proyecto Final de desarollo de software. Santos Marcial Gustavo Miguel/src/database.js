import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://GustavoSantosCESUN:<password>@cluster1.5c8bnjr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error));

module.exports = mongoose;
