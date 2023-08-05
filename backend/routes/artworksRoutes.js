const { Router } = require('express');
const {
  getAllArtworks,
  getArtworks,
  getArtworksByTitle,
} = require('../controllers/artworksControllers');

const router = Router();

router.get('/allArtworks', getAllArtworks);
router.get('/artworks', getArtworks);
router.get('/artworks/:title?', getArtworksByTitle);

module.exports = router;
