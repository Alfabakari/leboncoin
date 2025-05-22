const Ad = require('../models/Ad');

const getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find().populate('author', 'username');
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id).populate('author', 'username email');
    if (!ad) {
      return res.status(404).json({ msg: 'Ad not found' });
    }
    res.json(ad);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Ad not found' });
    }
    res.status(500).send('Server error');
  }
};

const createAd = async (req, res) => {
  const { title, description, price, category } = req.body;

  try {
    const newAd = new Ad({
      title,
      description,
      price,
      category,
      author: req.user._id
    });

    const ad = await newAd.save();
    res.json(ad);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const updateAd = async (req, res) => {
  const { title, description, price, category } = req.body;

  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) {
      return res.status(404).json({ msg: 'Ad not found' });
    }

    ad.title = title || ad.title;
    ad.description = description || ad.description;
    ad.price = price || ad.price;
    ad.category = category || ad.category;

    await ad.save();
    res.json(ad);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) {
      return res.status(404).json({ msg: 'Ad not found' });
    }

    await ad.remove();
    res.json({ msg: 'Ad removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Ad not found' });
    }
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllAds,
  getAdById,
  createAd,
  updateAd,
  deleteAd
};