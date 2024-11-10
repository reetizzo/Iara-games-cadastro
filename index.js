const express = require('express')
const app  = express()
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  app.post('/Cadastro', (req, res) => {

    var LocalStorage = require('node-localstorage').LocalStorage;
    var localStorage = new LocalStorage('./scratch');
      
    localStorage.setItem('1', JSON.stringify(req.body));
    
    console.log(localStorage.getItem('1'));
  })