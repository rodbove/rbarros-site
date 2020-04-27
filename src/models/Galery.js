const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const GalerySchema = new mongoose.Schema({
  legend: String,
  imageUrl: String,
  createdAt: Date,
});

GalerySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Galery', GalerySchema);
