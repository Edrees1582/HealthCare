const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const uri =
  'mongodb+srv://edreesashab:m3hCyKULoiLlQCsl@healthcare.4d8v0tg.mongodb.net/?retryWrites=true&w=majority&ssl=true';
const mongoose = require('mongoose');
const diseaseController = require('./diseaseController');

const PORT = 1582;

mongoose
  .connect(uri)
  .then(() => console.log('Database connected successfully!'))
  .catch((error) => console.log(error));

app.engine('ejs', ejsMate);

// app.use('/views', express.static(path.join(__dirname, 'views')));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('diseases');
});

app.get('/diseases', diseaseController.index);

app.get('/diseases/:disease', diseaseController.show);

app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});
