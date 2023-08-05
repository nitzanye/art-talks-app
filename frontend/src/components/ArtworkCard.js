const ArtworkCard = ({ artwork, onClick, isSelectedArtwork }) => {
  return (
    <div onClick={onClick ? () => onClick(artwork) : undefined}>
      <img
        className={`card__image ${
          isSelectedArtwork ? 'card__image-full' : 'card__image-part'
        }`}
        src={artwork.picture}
        alt={artwork.title}
      />
    </div>
  );
};

export default ArtworkCard;
