const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  causes: [String],
  mostAffectedAge: String,
  age: [String], //enum: ['baby', 'child', 'adult', 'elderly']
  prevention: [String],
  diet: [String],
  treatmentCenter: [String],
  additionalInfo: [String]
});

module.exports = mongoose.model('Disease', DiseaseSchema);
