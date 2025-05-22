const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
  getAllAds,
  getAdById,
  createAd,
  updateAd,
  deleteAd
} = require('../controllers/adController');

// @route   GET api/ads
// @desc    Get all ads
// @access  Public
router.get('/', getAllAds);

// @route   GET api/ads/:id
// @desc    Get ad by ID
// @access  Public
router.get('/:id', getAdById);

// @route   POST api/ads
// @desc    Create an ad
// @access  Private
router.post('/', auth, createAd);

// @route   PUT api/ads/:id
// @desc    Update an ad
// @access  Private
router.put('/:id', auth, updateAd);

// @route   DELETE api/ads/:id
// @desc    Delete an ad
// @access  Private
router.delete('/:id', auth, deleteAd);

module.exports = router;