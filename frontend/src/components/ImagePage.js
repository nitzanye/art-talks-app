import React from 'react';
import Chat from './Chat';
import './ImagePage.css';
import { useFetchArtworks } from '../hooks/useFetchArtworks';
import ArtworkCard from './ArtworkCard';

const ImagePage = ({ selectedArtwork }) => {
  const {
    data: artwork,
    loading,
    error,
  } = useFetchArtworks(selectedArtwork ? selectedArtwork.title : '');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading artwork.</div>;

  return (
    <section className='image-page__section'>
      <div>
        <div className='selected__wrapper'>
          <h4 className='selected__title'>{selectedArtwork.title}</h4>
          <p className='card__artist'>By:{selectedArtwork.artist}</p>
        </div>
        <div className='artwork__wrapper'>
          <ArtworkCard artwork={selectedArtwork} isSelectedArtwork={true} />
          {artwork && <Chat artWorkId={artwork.title} />}
        </div>
      </div>
    </section>
  );
};

export default ImagePage;
