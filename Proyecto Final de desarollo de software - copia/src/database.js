const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = "mongodb+srv://GustavoSantosCESUN:<password>@cluster0.hwcrxbj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error));

module.exports = mongoose;
