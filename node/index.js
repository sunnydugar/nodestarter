
const express   = require('express')
var bodyParser  = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World Base level!')
})

app.post('/user', (request, response) => {
    response.send('You created a new user');
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})