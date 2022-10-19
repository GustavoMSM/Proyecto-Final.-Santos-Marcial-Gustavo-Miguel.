import app from './app.js'
import './database.js'
import mongoose from 'mongoose';

app.listen(3000);
console.log('Server listen on port',3000)

const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connect to Atlas DB'))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));