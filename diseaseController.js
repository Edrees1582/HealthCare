const Disease = require('./diseaseModel');

module.exports.index = async (req, res) => {
  try {
    let diseases = await Disease.find({});
    if (req.query.searchDisease)
      diseases = await Disease.find({
        name: { $regex: req.query.searchDisease, $options: 'i' }
      }).sort({ title: 'asc' });
    res.render('diseases', { diseases });
  } catch (error) {
    res.send('No diseases found.');
  }
};

module.exports.show = async (req, res) => {
  try {
    let disease = await Disease.findOne({ name: req.params.disease });
    if (disease) res.render('disease', { disease });
    else throw Error('Diseases not found.');
    // res.send(disease);
  } catch (error) {
    res.send('Diseases not found.');
  }
};
