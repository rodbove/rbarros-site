const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const VideoSchema = new mongoose.Schema({
  title: String,
  video_id: String,
  createdAt: Date,
});

VideoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Video', VideoSchema);
