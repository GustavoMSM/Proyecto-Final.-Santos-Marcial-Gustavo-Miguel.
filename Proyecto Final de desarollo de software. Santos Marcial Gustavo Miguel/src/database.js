import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import  { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://GustavoSantosCESUN:ufknCYpkUqkisH0a@cluster1.5c8bnjr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1, 
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error));
