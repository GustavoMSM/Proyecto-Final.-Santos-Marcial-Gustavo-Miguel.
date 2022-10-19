import express from 'express' ;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello");
});

app.post('/', (req, res) => {
    res.send('Hello Post!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
