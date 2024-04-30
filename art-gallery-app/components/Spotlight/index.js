import React from 'react'
import Image from 'next/image'
import FavoriteButton from '../FavoriteButton'

export default function Spotlight({image, artist, title, slug, setArtPiecesInfo, artPiecesInfo}) {
  return (
    <div>
        <Image src={image} alt={title} width={400} height={600}/>
        <h3>{artist}</h3>
        <FavoriteButton clickedPieceSlug={slug} artPiecesInfo={artPiecesInfo} setArtPiecesInfo={setArtPiecesInfo} />
    </div>
  )
}
