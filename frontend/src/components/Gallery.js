import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/ImagePage.css';
import { useFetchArtworks } from '../hooks/useFetchArtworks';
import ArtworkCard from './ArtworkCard';

const Gallery = ({ setSelectedArtwork }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: artworks, loading, error } = useFetchArtworks(searchTerm);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading artworks.</div>;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <div>
      <form className='search__container' onSubmit={handleSearchSubmit}>
        <div className='search__wrapper'>
          <input
            className='search__field'
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='What are you looking for?'
          />
        </div>
      </form>
      <div className='card__list'>
        {artworks.map((artwork) => (
          <div className='card__container' key={artwork.title}>
            <Link className='link' to={`/image/${artwork.title}`}>
              <ArtworkCard
                artwork={artwork}
                onClick={handleArtworkClick}
                isSelectedArtwork={false}
              />
              <div className='card__content'>
                <h3>{artwork.title}</h3>
                <p className='card__artist'>Artist: {artwork.artist}</p>
                <p>Description: {artwork.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
