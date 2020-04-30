const Galery = require('../models/Galery');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;
    const { offset = 0 } = parseInt(request.query.offset);

    const photos = await Galery.paginate({}, {
      page,
      offset,
      sort: { createdAt: 1 }
    });

    return response.json(photos);
  },

  async show(request, response) {
    const photo = await Galery.findById(request.params.id);

    return response.json(photo);
  },

  async store(request, response) {
    const { legend } = request.body;
    const galeryImage = request.file.filename;

    const photo = await Galery.create({
      legend,
      imageUrl: `${process.env.APP_URL}/uploads/${galeryImage}`,
      createdAt: new Date(),
    });

    return response.json(photo);
  }
}
