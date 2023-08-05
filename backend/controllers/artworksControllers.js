const artworksData = require('../db.json');

const getAllArtworks = (req, res) => {
  res.json(artworksData.artworks);
};

const getArtworks = (req, res) => {
  const { searchTerm } = req.query;

  if (!searchTerm || searchTerm.trim() === '') {
    return res.json(artworksData.artworks);
  }

  const filteredArtworks = artworksData.artworks.filter(
    (artwork) =>
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return res.json(filteredArtworks);
};

const getArtworksByTitle = (req, res) => {
  const { title } = req.params;

  if (!title) {
    return res.json(artworksData.artworks);
  }

  const filteredArtworks = artworksData.artworks.filter((artwork) =>
    artwork.title.toLowerCase().includes(title.toLowerCase()),
  );
  return res.json(filteredArtworks);
};

module.exports = {
  getAllArtworks,
  getArtworks,
  getArtworksByTitle,
};
