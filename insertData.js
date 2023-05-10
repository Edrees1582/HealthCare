const DiseaseModel = require('./diseaseModel');
const uri =
  'mongodb+srv://edreesashab:m3hCyKULoiLlQCsl@healthcare.4d8v0tg.mongodb.net/?retryWrites=true&w=majority&ssl=true';
const mongoose = require('mongoose');

mongoose
  .connect(uri)
  .then(() => console.log('Database connected successfully!'))
  .catch((error) => console.log(error));

DiseaseModel.insertMany([
  {
    name: ``,
    info: ``,
    causes: [``],
    mostAffectedAge: ``,
    prevention: [``],
    diet: [``],
    treatmentCenter: [``],
    additionalInfo: [``]
  }
]);
