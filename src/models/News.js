const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const NewsSchema = new mongoose.Schema({
  brief: String,
  body: String,
  newsImage: String,
  imageUrl: String,
  createdAt: Date,
});

NewsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('News', NewsSchema);
