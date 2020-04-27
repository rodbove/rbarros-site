const Videos = require('../models/Videos');

module.exports = {
  async index(request, response) {
    const videos = await Videos.paginate({}, {
      page: 1,
      limit: 8
    });

    return response.json(videos);
  },

  async show(request, response) {
    const video = await Videos.findById(request.params.id);

    return response.json(video);
  },

  async store(request, response) {
    const { title, video_id } = request.body;

    const video = await Videos.create({
      title,
      video_id,
      createdAt: new Date(),
    });

    return response.json(video);
  }
}
