import React from 'react'
import Image from 'next/image'
import FavoriteButton from '../FavoriteButton'

export default function ArtPiecesDetails({image, title, artist, year, genre, slug, artPiecesInfo, setArtPiecesInfo}) {
    
  return (
    <div>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={200} height={300}/>
      <h4>{artist}</h4>
      <p>{year}</p>
      <p>{genre}</p>
      <FavoriteButton clickedPieceSlug={slug} artPiecesInfo={artPiecesInfo} setArtPiecesInfo={setArtPiecesInfo} />
    </div>
  )
}
