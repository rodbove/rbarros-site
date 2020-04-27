const News = require('../models/News');

module.exports = {
  async index(request, response) {
    const limit = parseInt(request.query.limit);
    const { page = 1 } = request.query;
    const offset = parseInt(request.query.offset);
    const news = await News.paginate({}, {
      page,
      limit,
      offset,
      sort: { createdAt: -1 }
    });

    return response.json(news);
  },

  async show(request, response) {
    const news = await News.findById(request.params.id);

    return response.json(news);
  },

  async store(request, response) {
    const { brief, body } = request.body;
    const newsImage = request.file.filename;

    const news = await News.create({
      brief,
      body,
      newsImage,
      imageUrl: `${process.env.APP_URL}/uploads/${newsImage}`,
      createdAt: new Date(),
    });

    return response.json(news);
  }
}
